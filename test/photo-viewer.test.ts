import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import type { IaPhotoViewer } from '../src/photo-viewer/photo-viewer';
import '../src/photo-viewer/photo-viewer';
import { linerNotesManifestStub } from './utils/liner-notes-stub';
import { BookReader } from '../src/photo-viewer/interfaces-types';

class BookReaderClass {
  init: () => void;

  resize: () => void;

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

beforeEach(() => {
  (window as any).BookReader = BookReaderClass as unknown as BookReader;
});
afterEach(() => {
  sinon.restore();
  (window as any).BookReader = undefined;
  (window as any).br = undefined;
});

describe('`<iaux-photo-viewer>`', () => {
  describe('Defaults', () => {
    it('Displays Audio Icon as default', async () => {
      const el = await fixture<IaPhotoViewer>(
        html`<iaux-photo-viewer></iaux-photo-viewer>`
      );

      expect(el.shadowRoot).to.exist;
      expect(el.shadowRoot?.querySelector('div.no-images')).to.exist;
      expect(el.shadowRoot?.querySelector('ia-icon-audio')).to.exist;
      expect(el.shadowRoot?.querySelector('ia-icon-audio')?.shadowRoot).to
        .exist;
    });
  });

  describe('Selecting Primary Image', () => {
    it('returns undefined if nothing found', async () => {
      const el = await fixture<IaPhotoViewer>(
        html`<iaux-photo-viewer></iaux-photo-viewer>`
      );

      expect(el.primaryImage).to.be.undefined;
    });
    it('from `looseImages` list', async () => {
      const el = await fixture<IaPhotoViewer>(
        html`<iaux-photo-viewer
          .itemIdentifier=${'exampleItemId1234'}
          .looseImages=${['foo.jpg', 'bar.jpg']}
        ></iaux-photo-viewer>`
      );
      expect(el.looseImages.length).to.equal(2);
      expect(el.primaryImage).to.equal(
        'https://archive.org/download/exampleItemId1234/download/exampleItemId1234/foo.jpg'
      );
    });
    it('from liner notes manifest', async () => {
      const el = await fixture<IaPhotoViewer>(
        html`<iaux-photo-viewer
          .linerNotesManifest=${linerNotesManifestStub}
          .itemIdentifier=${linerNotesManifestStub.metadata.identifier}
          .itemMd=${linerNotesManifestStub.metadata}
        ></iaux-photo-viewer>`
      );
      expect(el.primaryImage).to.equal(
        'https://ia800103.us.archive.org/BookReader/BookReaderImages.php?zip=/29/items/cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera/cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera_jp2.zip&file=cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera_jp2/cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera_0000.jp2&id=cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera'
      );
    });
  });
});
