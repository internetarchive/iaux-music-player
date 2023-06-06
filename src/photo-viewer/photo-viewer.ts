/* global: BookReader */
/* eslint-disable no-console */
/* eslint-disable no-restricted-properties */
import { LitElement, html, TemplateResult, PropertyValues, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@internetarchive/icon-close-circle';
import '@internetarchive/icon-texts';

import {
  BookManifest,
  BookReader,
  BRImageInfo,
  IaItemMetadata,
} from './interfaces-types';
import { loadBookReader } from './bookreader-utils';
import './image-placeholder';
// eslint-disable-next-line import/no-named-default
import { default as SeeMoreIcon } from './more-inside-icon';

@customElement('iaux-photo-viewer')
export class IaPhotoViewer extends LitElement {
  @property({ type: Boolean, reflect: true }) showAllPhotos = false;

  @property({ type: String, attribute: true, reflect: true }) baseHost: string =
    'archive.org';

  @property({ type: Boolean, reflect: true }) signedIn: boolean = false;

  @property({ type: String, reflect: true, attribute: true })
  itemIdentifier: string = '';

  @property({ type: Object }) itemMD?: IaItemMetadata;

  @property({ type: Object }) linerNotesManifest?: BookManifest;

  @property({ type: Object }) bookreader?: BookReader;

  @property({ type: Boolean, reflect: true }) fullscreenActive: boolean = false;

  @property({ type: Boolean }) reInitBrAtFullscreen: boolean = false;

  @property({ type: Boolean, reflect: true }) noImageAvailable: boolean = false;

  @property({ attribute: true, type: String, reflect: true })
  backgroundTheme: 'light' | 'dark' = 'dark';

  /** Element to append BookReader's current light dom to display photo */
  @property({ type: Object }) lightDomHook?: HTMLElement;

  @query('button.click-for-photos img') coverImage?: HTMLButtonElement;

  disconnectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.disconnectedCallback();

    // remove event listeners
    window.removeEventListener('BookReader:PostInit', this.handleBrPostInit);
  }

  firstUpdated(): void {
    this.bindBrEvents();
  }

  updated(changed: PropertyValues<this>) {
    if (changed.has('linerNotesManifest') && this.linerNotesManifest) {
      this.loadFreshBookReaderFromManifest();
    }

    if (changed.has('showAllPhotos') && this.showAllPhotos) {
      this.initBr(500);
    }
  }

  /** there's an unnamed slot always in use */
  render(): TemplateResult {
    if (this.noImageAvailable) {
      return html`
        <div class="no-images">
          <iamusic-noimage .iaIdentifier=${this.itemIdentifier}
            >no image available</iamusic-noimage
          >
        </div>
      `;
    }

    const bgClass = this.backgroundTheme === 'light' ? 'light' : '';
    const showAllPhotosClass = this.showAllPhotos ? 'show-back' : '';
    const fullscreenClass = this.fullscreenActive ? 'fullscreenActive' : '';
    return html`
      <div
        class=${`flip-card ${showAllPhotosClass} ${fullscreenClass} ${bgClass}`}
      >
        <div class="flip-card-inner">
          <div class="flip-card-front">${this.photoAlbumCover}</div>
          <div class="flip-card-back">${this.linerNotesView}</div>
        </div>
      </div>
    `;
  }

  togglePhotoViewer(): void {
    this.showAllPhotos = !this.showAllPhotos;
    if (!this.showAllPhotos) {
      this.fullscreenActive = false;
      this.dispatchEvent(new Event('fullscreenClosed'));
    }
  }

  get imageBaseUrl(): string {
    return `https://${this.baseHost}/download/${this.itemIdentifier}`;
  }

  get primaryImage(): string | undefined {
    if (this.linerNotesManifest) {
      const firstImageInfo =
        this.linerNotesManifest.brOptions.data?.flat()[0] as BRImageInfo;
      return (firstImageInfo?.uri as string) || undefined;
    }

    return undefined;
  }

  get linerNotesView(): TemplateResult {
    return html`
      <div class=${`photo-viewer-container`}>
        <button
          id="close-photo-viewer"
          @click=${() => {
            this.bookreader?.exitFullScreen();
            this.togglePhotoViewer();
          }}
        >
          <span class="sr-only">Click to close Photo Viewer.</span>
          <ia-icon-close-circle></ia-icon-close-circle>
        </button>
        <ia-bookreader
          .item=${this.linerNotesManifest}
          .baseHost=${this.baseHost}
          .signedIn=${this.signedIn}
          ><div slot="main"><slot name="main"></slot></div
        ></ia-bookreader>
      </div>
    `;
  }

  get photoAlbumCover(): TemplateResult {
    const displayTitle = this.itemMD?.title ?? this.itemIdentifier;
    const image = this.primaryImage
      ? this.primaryImage
      : `//${this.baseHost}/services/img/${this.itemIdentifier}`;
    return html`
      <div class="cover-art">
        <button
          class="click-for-photos"
          @click=${async () => {
            this.togglePhotoViewer();
          }}
        >
          <div id="see-more-cta">
            <p>See more ${SeeMoreIcon}</p>
          </div>
          <img
            src=${image}
            alt=${`primary image for ${displayTitle}`}
            @load=${(e: Event) => {
              const target = e.target as HTMLImageElement;
              const { width, height } = target.getBoundingClientRect();
              this.dispatchEvent(
                new CustomEvent('coverImageLoaded', {
                  detail: { width, height, target },
                })
              );
            }}
          />
          <span class="sr-only">See all photos for ${displayTitle}</span>
        </button>
      </div>
    `;
  }

  /* -- BookReader -- */
  handleBrPostInit(e: Event): void {
    // final instance - let's pin
    this.bookreader = (e as CustomEvent)?.detail.props;
    (window as any).br = this.bookreader;

    setTimeout(() => {
      this.bookreader?.jumpToIndex(0);
      this.bookreader?.resize();
    }, 1000);
  }

  bindBrEvents = () => {
    /** Set listeners that load bookreader core & web component */
    window.addEventListener('BookReader:PostInit', this.handleBrPostInit);

    window.addEventListener('BookReader:fullscreenToggled', () => {
      this.fullscreenActive = this.bookreader?.isFullscreen() || false;
      const eventName = this.fullscreenActive
        ? 'fullscreenOpened'
        : 'fullscreenClosed';
      this.dispatchEvent(new Event(eventName));
    });
  };

  prepareLightDomHook(): void {
    // check if bookreader hook is already loaded
    const currentBookReaderSlot = this.lightDomHook?.querySelector(
      'div.bookreader-slot'
    );

    if (currentBookReaderSlot) {
      this.lightDomHook?.removeChild(currentBookReaderSlot);
    }
  }

  async loadFreshBookReaderFromManifest(): Promise<void> {
    // add DOM to provided lightdom hook
    await this.mountBookReaderLightDomHook();
    await this.initBr();
  }

  async initBr(awaitMs = 0): Promise<void> {
    console.log('&&&& INIT BR');
    await new Promise<void>((resolve): void => {
      setTimeout(() => {
        this.bookreader =
          this.linerNotesManifest && loadBookReader(this.linerNotesManifest);
        console.log('&&&& BR OPTIONS', this.bookreader?.options);
        this.bookreader?.init();
        resolve();
      }, awaitMs);
    });
  }

  async mountBookReaderLightDomHook(): Promise<void> {
    await new Promise(resolve => {
      const currentBookReaderSlot = this.lightDomHook?.querySelector(
        'div.bookreader-slot'
      );
      if (currentBookReaderSlot) {
        this.lightDomHook?.removeChild(currentBookReaderSlot);
      }

      const bookreaderSlot = document.createElement('div');
      bookreaderSlot.setAttribute('slot', 'main');
      bookreaderSlot.classList.add('bookreader-slot');

      const bookreaderMain = document.createElement('div');

      bookreaderMain.classList.add('liner-notes');
      bookreaderSlot.append(bookreaderMain);

      this.lightDomHook?.append(bookreaderSlot);
      bookreaderMain.setAttribute('id', 'BookReader');
      bookreaderMain.classList.add('BookReader');
      resolve(true);
    });
  }
  /* -- End BookReader -- */

  static styles = css`
    :host {
      display: block;
    }

    :host[fullscreenactive],
    .flip-card.fullscreenActive {
      position: absolute;
      inset: 0;
      height: var(--linerNotesFullscreenHeight, 100vh);
    }

    div.no-images {
      display: flex;
      height: inherit;
    }
    div.no-images * {
      --iconFillColor: white;
      --iconHeight: 250px;
      --iconWidth: 250px;
      margin: auto;
    }

    ia-icon-texts {
      height: 50px;
      width: 50px;
      --iconFillColor: white;
      display: block;
    }

    button {
      cursor: pointer;
      border: 1px solid transparent;
      background-color: transparent;
    }

    .cover-art,
    button.click-for-photos {
      height: inherit;
      position: relative;
      padding: 0;
    }

    button.click-for-photos {
      display: flex;
      margin: auto;
      min-height: 30%;
      min-width: 30%;
      flex-direction: column;
      height: inherit;
      align-items: center;
    }

    button.click-for-photos img {
      display: block;
      overflow: hidden;
      object-fit: contain;
      object-position: top;
      max-width: 100%;
      max-height: 100%;
      min-height: 250px;
      margin-top: 0;
    }

    button.click-for-photos ia-icon-texts,
    button#close-photo-viewer {
      position: absolute;
      top: 0;
      right: 0;
    }

    button span.sr-only {
      position: absolute;
      height: 1px;
      width: 1px;
      top: 0;
      left: 0;
      visibility: hidden;
    }

    button#close-photo-viewer {
      border: none;
      z-index: 2;
      padding: 0;
    }

    button#close-photo-viewer ia-icon-close-circle {
      display: block;
      padding: 10px;
      --iconHeight: 20px;
      --iconWidth: 20px;
      --iconFillColor: #fff;
    }

    .flip-card {
      width: 100%;
      height: 100%;
      perspective: 1000px;
    }

    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    .flip-card.show-back .flip-card-inner {
      transform: rotateY(180deg);
    }

    .flip-card.show-back .flip-card-front .cover-art {
      transition: height 0.5s;
      height: 100%;
      visibility: hidden;
    }

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: transparent;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .flip-card-back {
      transform: rotateY(180deg);
    }

    .photo-viewer-container {
      height: inherit;
    }

    ia-bookreader {
      display: block;
      /* height: inherit; */
      background-color: transparent;
    }

    /* see more cta */
    .flip-card #see-more-cta {
      font-family: 'Helvetica Neue Bold', Helvetica, Arial, sans-serif;
      font-weight: bold;
      font-size: 14px;
      color: white;
      align-self: end;
      margin-right: 15px;
    }
    .flip-card #see-more-cta p {
      display: inline-block;

      margin: 0;
      margin-right: 10px;
    }
    .flip-card #see-more-cta svg {
      position: absolute;
      width: 16px;
      margin-top: -1px;
      margin-left: 0px;
    }
    .flip-card #see-more-cta .fill-color {
      fill: white;
    }

    .flip-card.light #see-more-cta {
      color: #222;
    }
    .flip-card.light #see-more-cta .fill-color {
      fill: #222;
    }
  `;
}
