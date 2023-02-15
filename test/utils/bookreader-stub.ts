import { linerNotesManifestStub } from './liner-notes-stub';

export class BookReaderClass {
  init: () => void;

  resize: () => void;

  isFullscreen: () => boolean;

  exitFullScreen: () => void;

  enterFullScreen: () => void;

  jumpToIndex: (index: number) => number;

  getPageURI: (index: number, reduce: number, rotate: number) => number[];

  ppi: string;

  options: {
    bookId: string;
    bookPath: string;
    imageFormat: string;
    server: string;
    subPrefix: string;
    zip: string;
    bookTitle: string;
    defaults: string;
    ppi: string;
    defaultStartLeaf: number;
    pageProgression: string;
    vars: {
      bookId: string;
      bookPath: string;
      server: string;
      subPrefix: string;
    };
    plugins: { textSelection: { enabled: boolean } };
    data: {
      width: number;
      height: number;
      uri: string;
      leafNum: number;
      pageType: string;
      pageSide: string;
    }[][];
  };

  constructor() {
    this.init = () => {};
    this.resize = () => {};
    this.isFullscreen = () => false;
    this.enterFullScreen = () => {};
    this.exitFullScreen = () => {};
    this.jumpToIndex = (index: number) => index;
    this.getPageURI = (index: number, reduce: number, rotate: number) => [
      index,
      reduce,
      rotate,
    ];
    this.ppi = '';
    this.options = linerNotesManifestStub.brOptions;
  }
}
