import { html, fixture, expect } from '@open-wc/testing';
import sinon, { SinonStub } from 'sinon';
import type { IaPhotoViewer } from '../src/photo-viewer/photo-viewer';
import '../src/photo-viewer/photo-viewer';
import { linerNotesManifestStub } from './utils/liner-notes-stub';
import { BookReader } from '../src/photo-viewer/interfaces-types';
import { BookReaderClass } from './utils/bookreader-stub';

beforeEach(() => {
  (window as any).BookReader = BookReaderClass as unknown as BookReader;
});
afterEach(() => {
  sinon.restore();
  (window as any).BookReader = undefined;
  (window as any).br = undefined;
});

describe('`<iaux-photo-viewer>`', () => {
  describe('Dispatches Events', () => {
    it('dispatches `coverImageLoaded`', async () => {
      const listenerStub = sinon.stub();
      await fixture<IaPhotoViewer>(
        html`<iaux-photo-viewer
          .linerNotesManifest=${linerNotesManifestStub}
          .itemIdentifier=${linerNotesManifestStub.metadata.identifier}
          .itemMd=${linerNotesManifestStub.metadata}
          @coverImageLoaded=${(e: CustomEvent) => {
            listenerStub();

            expect(e.detail.height).to.exist;
            expect(e.detail.width).to.exist;
            expect(listenerStub.callCount).to.equal(1);
          }}
        ></iaux-photo-viewer>`
      );
    });
  });
  describe('Event Listeners', () => {
    it('listens for `BookReader:PostInit`', async () => {
      await fixture<IaPhotoViewer>(
        html`<iaux-photo-viewer></iaux-photo-viewer>`
      );

      const mockBr = new BookReaderClass();
      mockBr.jumpToIndex = sinon.stub();
      mockBr.resize = sinon.stub();
      const mockPostInitEvent = new CustomEvent('BookReader:PostInit', {
        detail: {
          props: mockBr,
        },
      });
      window.dispatchEvent(mockPostInitEvent);
      // eslint-disable-next-line no-promise-executor-return
      await new Promise(resolve => setTimeout(resolve, 1200));

      expect((mockBr.jumpToIndex as SinonStub).callCount).to.equal(1);
      expect((mockBr.resize as SinonStub).callCount).to.equal(1);
    });
    describe('listens for `BookReader:fullscreenToggled', () => {
      it('tells us when `fullscreenOpened` or `fullscreenClosed`', async () => {
        const mockBr = new BookReaderClass();
        mockBr.isFullscreen = () => true;
        const yesFullscreenListener = sinon.stub();
        const noFullscreenListener = sinon.stub();
        const el = await fixture<IaPhotoViewer>(
          html`<iaux-photo-viewer
            .bookreader=${mockBr}
            .linerNotesManifest=${linerNotesManifestStub}
            .itemIdentifier=${linerNotesManifestStub.metadata.identifier}
            .itemMd=${linerNotesManifestStub.metadata}
            @fullscreenOpened=${() => yesFullscreenListener()}
            @fullscreenClosed=${() => noFullscreenListener()}
          ></iaux-photo-viewer>`
        );

        window.dispatchEvent(new Event('BookReader:fullscreenToggled'));
        await el.updateComplete;

        expect(yesFullscreenListener.callCount).to.equal(1);
        expect(noFullscreenListener.called).to.be.false;

        mockBr.isFullscreen = () => false;
        window.dispatchEvent(new Event('BookReader:fullscreenToggled'));
        await el.updateComplete;

        expect(noFullscreenListener.callCount).to.equal(1);
        expect(yesFullscreenListener.callCount).to.equal(1);
      });
    });
  });
  describe('Defaults', () => {
    it('Displays `<iamusic-noimage>` with attribute flag `noimageavailable`', async () => {
      const el = await fixture<IaPhotoViewer>(
        html`<iaux-photo-viewer noimageavailable></iaux-photo-viewer>`
      );

      expect(el.shadowRoot).to.exist;
      expect(el.shadowRoot?.querySelector('div.no-images')).to.exist;
      expect(
        el.shadowRoot
          ?.querySelector('div.no-images')
          ?.querySelector('iamusic-noimage')
      ).to.exist;
      expect(
        el.shadowRoot
          ?.querySelector('iamusic-noimage')
          ?.shadowRoot?.querySelector('ia-icon-audio')?.shadowRoot
      ).to.exist;
    });
  });

  describe('Rendering with Liner Notes', () => {
    it('starts with album cover button', async () => {
      const el = await fixture<IaPhotoViewer>(
        html`<iaux-photo-viewer
          .linerNotesManifest=${linerNotesManifestStub}
          .itemIdentifier=${linerNotesManifestStub.metadata.identifier}
          .itemMd=${linerNotesManifestStub.metadata}
        ></iaux-photo-viewer>`
      );

      expect(el.shadowRoot?.querySelector('button.click-for-photos')).to.exist;
      expect(
        el.shadowRoot
          ?.querySelector('button.click-for-photos')
          ?.querySelector('img')
      ).to.exist;
      expect(
        el.shadowRoot
          ?.querySelector('button.click-for-photos')
          ?.querySelector('ia-icon-texts')
      ).to.exist;
      expect(
        el.shadowRoot
          ?.querySelector('button.click-for-photos')
          ?.querySelector('span.sr-only')
      ).to.exist;
    });
    it('Toggling bookreader view', async () => {
      const listenerStub = sinon.stub();
      const el = await fixture<IaPhotoViewer>(
        html`<iaux-photo-viewer
          .linerNotesManifest=${linerNotesManifestStub}
          .itemIdentifier=${linerNotesManifestStub.metadata.identifier}
          .itemMd=${linerNotesManifestStub.metadata}
          @fullscreenClosed=${() => listenerStub()}
        ></iaux-photo-viewer>`
      );

      expect(el.showAllPhotos).to.be.false;

      const coverButton = el.shadowRoot?.querySelector(
        'button.click-for-photos'
      ) as HTMLButtonElement;
      expect(coverButton).to.exist;

      coverButton?.click();
      await el.updateComplete;

      expect(el.showAllPhotos).to.be.true;

      // dispatches event when fullscreen mode is being closed
      window.dispatchEvent(new Event('BookReader:fullscreenToggled'));
      await el.updateComplete;
      el.fullscreenActive = true;
      await el.updateComplete;
      expect(el.fullscreenActive).to.be.true; // confirm that fullscreen state is on
      expect(el.showAllPhotos).to.be.true; // still showing all photos

      const closeReaderButton = el.shadowRoot?.querySelector(
        'button#close-photo-viewer'
      ) as HTMLButtonElement;

      expect(closeReaderButton).to.exist;
      closeReaderButton?.click();
      await el.updateComplete;

      expect(el.fullscreenActive).to.be.false; // confirm that fullscreen state is off
      expect(el.showAllPhotos).to.be.false;
    });
  });

  describe('Selecting Primary Image', () => {
    it('returns undefined if nothing found', async () => {
      const el = await fixture<IaPhotoViewer>(
        html`<iaux-photo-viewer></iaux-photo-viewer>`
      );

      expect(el.primaryImage).to.be.undefined;
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
  describe('Helpers', () => {
    it('creates an image ur', async () => {
      const el = await fixture<IaPhotoViewer>(
        html`<iaux-photo-viewer
          .linerNotesManifest=${linerNotesManifestStub}
          .itemIdentifier=${'barIdentifier'}
          .itemMd=${linerNotesManifestStub.metadata}
          .baseHost=${'foo.boop'}
        ></iaux-photo-viewer>`
      );

      expect(el.imageBaseUrl).to.equal(
        'https://foo.boop/download/barIdentifier'
      );
    });
  });
});
