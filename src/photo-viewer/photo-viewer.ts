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

  /** Element to append BookReader's current light dom to display photo */
  @property({ type: Object }) lightDomHook?: HTMLElement;

  firstUpdated() {
    /** Set listeners that load bookreader core & web component */
    window.addEventListener('BookReader:PostInit', e => {
      // final instance - let's pin
      this.bookreader = (e as CustomEvent)?.detail.props;
      (window as any).br = this.bookreader;
    });

    /* Listen for BookReader's web components load before initializing BR  */
    window.addEventListener('BrBookNav:PostInit', e => {
      console.log('BookNav:PostInit', e);
      // this.bookreader = (e as CustomEvent)?.detail;
      // (window as any).br = this.bookreader;
      setTimeout(() => {
        this.bookreader?.init();
      }, 0); /* wait for bookreader & its main container styles to load */
    });
  }

  updated(changed: PropertyValues<this>) {
    if (changed.has('showAllPhotos') && this.showAllPhotos) {
      if (this.linerNotesManifest) {
        this.prepareLightDomHook();
        this.loadFreshBookReaderFromManifest();
      }
    }

    if (
      this.linerNotesManifest &&
      ((changed.has('lightDomHook') && this.lightDomHook) ||
        changed.has('linerNotesManifest'))
    ) {
      this.prepareLightDomHook();
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

    if (this.showAllPhotos) {
      if (this.linerNotesManifest) {
        return html`
          <ia-bookreader
            .item=${this.linerNotesManifest}
            .baseHost=${this.baseHost}
            ?signedIn=${this.signedIn}
            style="min-height: inherit;"
            @fullscreenStateUpdated=${(e: any) => {
              console.log('MANAGE FS', e);
            }}
            ><div slot="main"><slot name="main"></slot></div
          ></ia-bookreader>
        `;
      }
    }

    if (this.linerNotesManifest || this.looseImages?.length) {
      return this.photoAlbumCover;
    }

    return html`
      <div class="no-images">
        <ia-icon-audio></ia-icon-audio>
      </div>
    `;
  }

  togglePhotoViewer(e: Event) {
    console.log('~~~~~ togglePhotoViewer', e, this.showAllPhotos);

    this.showAllPhotos = !this.showAllPhotos;
  }

  get photoAlbumCover(): TemplateResult {
    const displayTitle = this.itemMD?.title ?? this.itemIdentifier;
    const image =
      this.primaryImage ??
      `//${this.baseHost}/services/img/${this.itemIdentifier}`;
    return html`
      <button class="click-for-photos" @click=${this.togglePhotoViewer}>
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

  async loadFreshBookReaderFromManifest(): Promise<void> {
    // add DOM to provided lightdom hook
    console.log('loadFreshBookReaderFromManifest', this.lightDomHook);

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
    bookreaderMain.setAttribute('id', 'BookReader');
    bookreaderMain.classList.add('BookReader');
    bookreaderMain.classList.add('liner-notes');
    bookreaderSlot.append(bookreaderMain);

    this.lightDomHook?.append(bookreaderSlot);
    console.log('~~ Light dom hook appended', this.lightDomHook?.childNodes);

    this.bookreader =
      this.linerNotesManifest && loadBookReader(this.linerNotesManifest);
  }

  get primaryImage(): string | undefined {
    if (this.linerNotesManifest && this.bookreader) {
      const firstImageInfo =
        this.bookreader.options.data.flat()[0] as BRImageInfo;
      return firstImageInfo.uri as string;
    }

    if (this.looseImages?.length) {
      return `${this.imageBaseUrl}/download/${this.itemIdentifier}/${this.looseImages[0]}`;
    }

    return undefined;
  }

  static styles = css`
    div.no-images * {
      --iconFillColor: white;
      display: block;
      overflow: hidden;
    }

    button.click-for-photos,
    button.click-for-photos * {
      margin: auto;
    }

    button.click-for-photos {
      border: 1px solid transparent;
      background-color: transparent;
      display: block;
      padding: 5px;
      overflow: hidden;
      cursor: pointer;
      position: relative;
      /* allows for height to be controlled by top component */
      /* cover image will grow/shrink with container size */
      height: inherit;
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
      height: 50px;
      width: 50px;
      --iconFillColor: white;
    }

    button span.sr-only {
      position: absolute;
      height: 1px;
      width: 1px;
      top: 0;
      left: 0;
      visibility: hidden;
    }
  `;
}
