/* global: BookReader */
/* eslint-disable no-console */
/* eslint-disable no-restricted-properties */
import { LitElement, html, TemplateResult, PropertyValues, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@internetarchive/icon-audio';
import '@internetarchive/icon-texts';
import {
  BookManifest,
  BookReader,
  BRImageInfo,
  IaItemMetadata,
} from './interfaces-types';
import { loadBookReader } from './bookreader-utils';

@customElement('iaux-photo-viewer')
export class IaPhotoViewer extends LitElement {
  @property({ type: Boolean, reflect: true }) showAllPhotos = false;

  @property({ type: String, attribute: true, reflect: true }) baseHost: string =
    'archive.org';

  @property({ type: Boolean, reflect: true }) signedIn: boolean = false;

  @property({ type: String, reflect: true }) itemIdentifier: string = '';

  @property({ type: Object }) itemMD?: IaItemMetadata;

  @property({ type: Array }) looseImages: string[] = [];

  @property({ type: Object }) linerNotesManifest?: BookManifest;

  @property({ type: Object }) bookreader?: BookReader;

  @property({ type: Boolean, reflect: true }) fullscreenActive: boolean = false;

  @property({ type: Boolean }) reInitBrAtFullscreen: boolean = false;

  /** Element to append BookReader's current light dom to display photo */
  @property({ type: Object }) lightDomHook?: HTMLElement;

  firstUpdated(): void {
    this.bindBrEvents();
  }

  bindBrEvents = () => {
    /** Set listeners that load bookreader core & web component */
    window.addEventListener('BookReader:PostInit', e => {
      console.log(
        'BookReader:PostInit BookReader:PostInit',
        e,
        this.bookreader
      );

      // final instance - let's pin
      this.bookreader = (e as CustomEvent)?.detail.props;
      (window as any).br = this.bookreader;

      setTimeout(() => {
        this.bookreader?.jumpToIndex(0);
        this.bookreader?.resize();
        console.log('POST INIT TIMEOUT RESIZED & JUMPED TO INDEX 00000');
      }, 1000);
    });

    window.addEventListener('BookReader:fullscreenToggled', () => {
      this.fullscreenActive = this.bookreader?.isFullscreen() || false;
    });
  };

  updated(changed: PropertyValues<this>) {
    if (changed.has('showAllPhotos') && this.showAllPhotos) {
      if (this.linerNotesManifest) {
        this.prepareLightDomHook();
        this.loadFreshBookReaderFromManifest();
      }
    }

    if (changed.has('linerNotesManifest') && this.linerNotesManifest) {
      this.loadFreshBookReaderFromManifest();
    }

    if (changed.has('looseImages') && this.looseImages?.length) {
      this.loadImages();
    }
  }

  /** there's an unnamed slot always in use */
  render(): TemplateResult {
    console.log('*** RENDER  itemIdentifier ', this.itemIdentifier);

    if (this.looseImages?.length === 1) {
      return html`<img
        src=${`${this.imageBaseUrl}${this.looseImages[0]}`}
        alt=${`Main image for ${this.itemIdentifier}`}
      />`;
    }

    if (this.linerNotesManifest) {
      return html`
        <div
          class=${`flip-card ${this.showAllPhotos ? 'show-back' : ''} ${
            this.fullscreenActive ? 'fullscreenActive' : ''
          }`}
        >
          <div class="flip-card-inner">
            <div class="flip-card-front">${this.photoAlbumCover}</div>
            <div class="flip-card-back">
              <div class=${`photo-viewer-container`}>
                <button
                  id="close-photo-viewer"
                  @click=${() => this.togglePhotoViewer()}
                >
                  <span class="sr-only">Click to close Photo Viewer.</span>
                  <ia-icon-texts></ia-icon-texts>
                </button>
                <ia-bookreader
                  .item=${this.linerNotesManifest}
                  .baseHost=${this.baseHost}
                  .signedIn=${this.signedIn}
                  ><div slot="main"><slot name="main"></slot></div
                ></ia-bookreader>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    return html`
      <div class="no-images">
        <ia-icon-audio></ia-icon-audio>
      </div>
    `;
  }

  togglePhotoViewer(): void {
    this.showAllPhotos = !this.showAllPhotos;
    if (!this.showAllPhotos) {
      this.fullscreenActive = false;
    }
  }

  get photoAlbumCover(): TemplateResult {
    const displayTitle = this.itemMD?.title ?? this.itemIdentifier;
    const image =
      this.primaryImage ??
      `//${this.baseHost}/services/img/${this.itemIdentifier}`;
    return html`
      <button
        class="click-for-photos"
        @click=${async () => {
          await this.loadFreshBookReaderFromManifest();
          this.togglePhotoViewer();
        }}
      >
        <img src=${image} alt=${`primary image for ${displayTitle}`} />
        <ia-icon-texts></ia-icon-texts>
        <span class="sr-only">See all photos for ${displayTitle}</span>
      </button>
    `;
  }

  /* END DOM */

  get imageBaseUrl(): string {
    return `https://${this.baseHost}/download/${this.itemIdentifier}`;
  }

  prepareLightDomHook(): void {
    // check if bookreader hook is already loaded
    const currentBookReaderSlot = this.lightDomHook?.querySelector(
      'div.bookreader-slot'
    );

    if (currentBookReaderSlot) {
      this.lightDomHook?.removeChild(currentBookReaderSlot);
    }
  }

  // eslint-disable-next-line no-empty-function
  async loadImages(): Promise<void> {}

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
      console.log(
        '~~ bookreaderSlot ',
        bookreaderSlot.offsetHeight,
        bookreaderSlot.offsetWidth
      );

      resolve(true);
    });
    console.log(
      '~~ async Light dom hook appended',
      this.lightDomHook?.childNodes
    );
  }

  async loadFreshBookReaderFromManifest(): Promise<void> {
    // add DOM to provided lightdom hook
    console.log('loadFreshBookReaderFromManifest :wave:', this.lightDomHook);
    await this.mountBookReaderLightDomHook();

    await new Promise<void>((resolve): void => {
      setTimeout(() => {
        console.log('loading BR Liner Notes in promise ~~~~~');
        this.bookreader =
          this.linerNotesManifest && loadBookReader(this.linerNotesManifest);
        this.bookreader?.init();
        resolve();
      }, 0);
    });
  }

  get primaryImage(): string | undefined {
    if (this.linerNotesManifest) {
      const firstImageInfo =
        this.linerNotesManifest.brOptions.data.flat()[0] as BRImageInfo;
      return firstImageInfo.uri as string;
    }

    if (this.looseImages?.length) {
      return `${this.imageBaseUrl}/download/${this.itemIdentifier}/${this.looseImages[0]}`;
    }

    return undefined;
  }

  static styles = css`
    :host {
      display: block;
    }

    :host[fullscreenactive],
    .flip-card.fullscreenActive {
      position: absolute;
      inset: 0;
      height: 100vh;
      width: 100vw;
    }

    div.no-images * {
      --iconFillColor: white;
      display: block;
      overflow: hidden;
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

    button.click-for-photos,
    button.click-for-photos * {
      margin: auto;
    }

    button.click-for-photos {
      padding: 5px;
      /* overflow: hidden;
      position: relative; */
      /* allows for height to be controlled by top component */
      /* cover image will grow/shrink with container size */

      height: inherit;
      width: -webkit-fill-available;
    }

    button.click-for-photos img {
      display: block;
      overflow: hidden;
      object-fit: contain;
      max-width: 100%;
      max-height: 100%;
      min-height: 250px;
    }

    button.click-for-photos ia-icon-texts {
      position: absolute;
      bottom: 0;
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
      position: absolute;
      border: none;
      z-index: 2;
      top: 0;
      right: 0;
      padding: 0;
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

    .flip-card.show-back .flip-card-inner {
      transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
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
      height: inherit;
    }
  `;
}