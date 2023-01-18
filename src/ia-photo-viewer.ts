/* global: BookReader */
/* eslint-disable no-console */
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

console.log('@@@@@@@@@@@@');

@customElement('ia-photo-viewer')
export class IaPhotoViewer extends LitElement {
  @property({ type: Array, attribute: false }) images = [];

  @property({ type: Object, attribute: false }) book: BookManifest | undefined =
    undefined;

  @property({ type: String, reflect: true }) displayMode: 'cover' | 'viewer' =
    'cover';

  @property({ type: Object }) bookreader: BookReader | undefined = undefined;

  @property({ type: Object }) linerNotesManifest: BookManifest | undefined =
    undefined;

  /** Element to append BookReader's current light dom to display photo */
  @property({ type: Object }) lightDomHook: HTMLElement | undefined = undefined;

  firstUpdated() {
    /* Listen for BookReader's web components load before initializing BR  */
    const initializeBookReader = () => {
      console.log('initializeBookReader', this.bookreader);
      this.bookreader!.init();
      // Q: DO WE NEED THIS?
      setTimeout(() => {
        console.log(
          'initializeBookReader setTimeoutsetTimeout',
          this.bookreader
        );

        this.bookreader?.resize();
        this.bookreader?.jumpToIndex(0);
      }, 1000); /* wait for bookreader & its main container styles to load */
    };
    window.addEventListener('BrBookNav:PostInit', () => initializeBookReader());

    window.addEventListener('BookReader:PostInit', e => {
      console.log(
        'BookReader:PostInit from ia-photo-viewer',
        (e as CustomEvent)?.detail
      );
    });
  }

  updated(changed: PropertyValues<this>) {
    console.log('updated', changed);

    if (
      this.linerNotesManifest &&
      ((changed.has('lightDomHook') && this.lightDomHook) ||
        changed.has('linerNotesManifest'))
    ) {
      this.loadFreshBookReaderFromManifest();
    }
    if (changed.has('images') && this.images.length) {
      this.loadImages();
    }
  }

  // eslint-disable-next-line no-empty-function
  async loadImages(): Promise<void> {}

  async loadFreshBookReaderFromManifest(): Promise<void> {
    // add DOM to provided lightdom hook
    const bookreaderSlot = document.createElement('div');
    bookreaderSlot.setAttribute('slot', 'main');

    const bookreaderMain = document.createElement('div');
    bookreaderMain.setAttribute('id', 'BookReader');
    bookreaderMain.classList.add('BookReader');
    bookreaderMain.classList.add('liner-notes');
    bookreaderSlot.append(bookreaderMain);
    this.lightDomHook?.append(bookreaderSlot);

    // gather BR Options
    const brOptions = this.linerNotesManifest?.brOptions;
    console.log('bookreaderDefaultOptions', this.bookreaderDefaultOptions);

    const fullOptions = {
      ...brOptions,
      ...this.bookreaderDefaultOptions,
    };
    // new bookreader from window.BookReader
    this.bookreader = new (window as any).BookReader(fullOptions) as BookReader;
    (window as any).br = this.bookreader;
    console.log('this.bookreader --- window.br:::::', this.bookreader);
    // bookreader will now load itself and we will initialize once its setup is complete `BookReader:PostInit && BookNav:PostInit`
  }

  get photoCover(): TemplateResult {
    return html`
      <button>
        photo cover
        <span>${textsIcon}</span>
      </button>
    `;
  }

  get hasPhotos(): boolean {
    return !!this.images.length || !!this.book;
  }

  /** there's an unnamed slot always in use */
  render(): TemplateResult {
    if (this.linerNotesManifest) {
      return html`
        <ia-bookreader
          ><div slot="main"><slot name="main"></slot></div
        ></ia-bookreader>
      `;
    }
    return html`<h3>"HELLO WORLD"</h3>
      <slot></slot>`;

    // if (!this.hasPhotos) {
    //   return html`<i title="no image found">${audioIcon}</i>`;
    // }
    // if (this.displayMode === 'cover') {
    //   return this.photoCover;
    // }
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
        // eslint-disable-next-line no-restricted-properties
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
    const brManifest: Record<any, any> = {};
    const brOptions = this.book?.brOptions;
    // core BR must be already loaded
    const fullOptions = {
      ...this.bookreaderDefaultOptions,
      ...brOptions,
    };
    console.log('~~~~ fullOptions', fullOptions);
    this.bookreader = new (window as any).BookReader(fullOptions);
    (window as any).br = this.bookreader; // keep for legacy

    //     // we expect this at the global level
    // (window as any).BookReaderJSIAinit(brManifest.data, brOptions);

    const { isRestricted } = brManifest.data;
    window.dispatchEvent(
      new CustomEvent('contextmenu', { detail: { isRestricted } })
    );
  }
}
