/* global: BookReader */
/* eslint-disable no-console */
/* eslint-disable no-restricted-properties */
/* eslint-disable prefer-exponentiation-operator */
import { LitElement, html, TemplateResult, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// import audioIcon from '@internetarchive/icon-audio/index.js';
import textsIcon from '@internetarchive/icon-texts/index.js';

type BookManifest = {
  data: Object;
  brOptions: Object;
  metadata: Object;
};

interface BookReader {
  init: () => void;
  resize: () => void;
  jumpToIndex: (index: number) => void;
}

@customElement('iaux-photo-viewer')
export class IaPhotoViewer extends LitElement {
  @property({ type: String, attribute: true, reflect: true }) baseHost =
    'archive.org';

  @property({ type: Boolean, reflect: true }) signedIn = false;

  @property({ type: String, reflect: true }) itemIdentifier = '';

  @property({ type: Object }) itemMD = undefined;

  @property({ type: Array }) looseImages: string[] = [];

  @property({ type: Object }) linerNotesManifest: BookManifest | undefined =
    undefined;

  @property({ type: Object }) bookreader: BookReader | undefined = undefined;

  /** Element to append BookReader's current light dom to display photo */
  @property({ type: Object }) lightDomHook: HTMLElement | undefined = undefined;

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
    // gather BR Options
    const brOptions = this.linerNotesManifest?.brOptions;
    console.log('bookreaderDefaultOptions', this.bookreaderDefaultOptions);

    const fullOptions = {
      ...brOptions,
      ...this.bookreaderDefaultOptions,
    };
    // new bookreader from window.BookReader
    this.bookreader = new (window as any).BookReader(fullOptions) as BookReader;
    console.log('this.bookreader --- window.br:::::', this.bookreader);
    // we will initialize once its setup is complete `BookReader:PostInit && BookNav:PostInit`
  }

  get photoCover(): TemplateResult {
    return html`
      <button>
        photo cover
        <span>${textsIcon}</span>
      </button>
    `;
  }

  /** there's an unnamed slot always in use */
  render(): TemplateResult {
    console.log('*** RENDER  ', this.lightDomHook);
    if (this.looseImages?.length === 1) {
      return html`<img
        src=${`${this.imageBaseUrl}${this.looseImages[0]}`}
        alt=${`Main image for ${this.itemIdentifier}`}
      />`;
    }

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

    return html`<h3>"HELLO WORLD -- ADD ICON HERE"</h3>`;
  }

  /**
  
  MANIFEST:
  data = {
    data: {
      streamOnly: false,
      isRestricted: false,
      id: item.id,
      subPrefix: item.id,
      bookUrl: '/details/cd
    }
    brOptions: {
      ppi,
      data: [], // spread array
      "plugins": {
        "textSelection": {
          "enabled": false
        }
      },
      "vars": {
        "bookId": "cd_taylor-swift_taylor-swift",
        "bookPath": "\/30\/items\/cd_taylor-swift_taylor-swift\/cd_taylor-swift_taylor-swift",
        "server": "ia600100.us.archive.org",
        "subPrefix": "cd_taylor-swift_taylor-swift"
      },
      metadata,
    }
  }
   */

  get bookreaderDefaultOptions(): Object {
    const originalGetPageURI = (window as any).BookReader.prototype.getPageURI;

    return {
      // "ppi": "600",
      el: '#BookReader',
      showToolbar: false,
      onePage: { autofit: 'height' }, // options: auto, width, height
      enableFSLogoShortcut: true,
      enableBookmarks: true,
      enablePageResume: false,
      enableTtsPlugin: false,
      enableUrlPlugin: false,
      defaults: 'mode/1up',
      enableSearch: true,
      searchInsideUrl: '/fulltext/inside.php',
      initialSearchTerm: null,
      imagesBaseURL: '/bookreader/BookReader/images/',
      defaultStartLeaf: 0,
      titleLeaf: 0,
      controls: {
        twoPage: { visible: false },
        viewmode: { visible: false },
      },
      bookType: 'linerNotes', // bookType: linerNotes, book
      /**
       * Needed bypass to generate Image URL with scale factor.
       * We must eliminate sooner than later to allow BookReader full image fetching control
       * @param {Number} index - page index
       * @param {Number} reduce - image size scale factor
       * @param {Number} rotate - degrees of rotation
       */
      getPageURI: (index: number, reduce: number = 1, rotate: number = 0) => {
        // IA only supports power of 2 reduces
        const brReduce = Math.pow(
          2,
          Math.floor(Math.log2(Math.max(1, reduce)))
        );
        let uri = originalGetPageURI.call(
          (this as any).bookreader,
          index,
          brReduce,
          rotate
        );
        uri += uri.indexOf('?') > -1 ? '&' : '?';
        uri = `${uri}scale=${brReduce}&rotate=${rotate}`;
        return uri;
      },
    };
  }

  async loadBookReader(): Promise<void> {
    // fetch manifest
    const brOptions = this.linerNotesManifest?.brOptions;
    // core BR must be already loaded
    const fullOptions = {
      ...brOptions,
      ...this.bookreaderDefaultOptions,
    };
    this.bookreader = new (window as any).BookReader(fullOptions);

    const isRestricted = (this.linerNotesManifest?.data as any)?.isRestricted;

    window.dispatchEvent(
      new CustomEvent('contextmenu', { detail: { isRestricted } })
    );
  }
}
