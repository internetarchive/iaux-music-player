import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { html, fixture } from '@open-wc/testing-helpers';
import type { IaPhotoViewer } from '../src/photo-viewer/photo-viewer';
import '../src/photo-viewer/photo-viewer';
import { linerNotesManifestStub } from './utils/liner-notes-stub';
import { BookReader } from '../src/photo-viewer/interfaces-types';
import { BookReaderClass } from './utils/bookreader-stub';

// The stub stays installed for the whole file: the photo viewer constructs
// window.BookReader asynchronously, so late constructions from a finished
// test must still hit the stub class.
beforeAll(() => {
  (window as any).BookReader = BookReaderClass as unknown as BookReader;
});
afterEach(() => {
  vi.restoreAllMocks();
  (window as any).br = undefined;
});

describe('`<iaux-photo-viewer>`', () => {
  describe('Dispatches Events', () => {
    it('dispatches `coverImageLoaded`', async () => {
      const listenerStub = vi.fn();
      await fixture<IaPhotoViewer>(
        html`<iaux-photo-viewer
          .linerNotesManifest=${linerNotesManifestStub}
          .itemIdentifier=${linerNotesManifestStub.metadata.identifier}
          .itemMd=${linerNotesManifestStub.metadata}
          @coverImageLoaded=${(e: CustomEvent) => {
            listenerStub();

            expect(e.detail.height).to.exist;
            expect(e.detail.width).to.exist;
            expect(listenerStub).toHaveBeenCalledTimes(1);
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
      mockBr.jumpToIndex = vi.fn();
      mockBr.resize = vi.fn();
      const mockPostInitEvent = new CustomEvent('BookReader:PostInit', {
        detail: {
          props: mockBr,
        },
      });
      window.dispatchEvent(mockPostInitEvent);

      // the handler defers these calls behind a 1s setTimeout
      await vi.waitFor(
        () => {
          expect(mockBr.jumpToIndex).toHaveBeenCalledTimes(1);
          expect(mockBr.resize).toHaveBeenCalledTimes(1);
        },
        { timeout: 2500 }
      );
    });
    describe('listens for `BookReader:fullscreenToggled', () => {
      it('tells us when `fullscreenOpened` or `fullscreenClosed`', async () => {
        const mockBr = new BookReaderClass();
        mockBr.isFullscreen = () => true;
        const yesFullscreenListener = vi.fn();
        const noFullscreenListener = vi.fn();
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

        expect(yesFullscreenListener).toHaveBeenCalledTimes(1);
        expect(noFullscreenListener).not.toHaveBeenCalled();

        mockBr.isFullscreen = () => false;
        window.dispatchEvent(new Event('BookReader:fullscreenToggled'));
        await el.updateComplete;

        expect(noFullscreenListener).toHaveBeenCalledTimes(1);
        expect(yesFullscreenListener).toHaveBeenCalledTimes(1);
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
          ?.querySelector('#see-more-cta')
      ).to.exist;
      expect(
        el.shadowRoot
          ?.querySelector('button.click-for-photos')
          ?.querySelector('span.sr-only')
      ).to.exist;
    });
    it('Toggling bookreader view', async () => {
      const listenerStub = vi.fn();
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
