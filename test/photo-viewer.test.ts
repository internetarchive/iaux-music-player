import { html, fixture, expect } from '@open-wc/testing';

import type { IaPhotoViewer } from '../src/photo-viewer/photo-viewer';
import '../src/photo-viewer/photo-viewer';

describe('`<iaux-photo-viewer>`', () => {
  describe('Defaults', () => {
    it('Displays Audio Icon as default', async () => {
      const el = await fixture<IaPhotoViewer>(
        html`<iaux-photo-viewer></iaux-photo-viewer>`
      );

      expect(el.shadowRoot).to.exist;
      expect(el.shadowRoot?.querySelector('ia-icon-audio')).to.exist;
      expect(el.shadowRoot?.querySelector('ia-icon-audio')?.shadowRoot).to
        .exist;
    });
  });
});
