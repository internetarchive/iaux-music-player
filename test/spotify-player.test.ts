import { html, fixture, expect } from '@open-wc/testing';
// import sinon from 'sinon';

import type { SpotifyPlayer } from '../src/players/spotify-player';
import '../src/players/spotify-player';

describe('`<spotify-player>`', () => {
  describe('Defaults', () => {
    it('displays iframe', async () => {
      const el = await fixture<SpotifyPlayer>(html`
        <spotify-player iaUrn="urn:spotify:album:foobar123"></spotify-player>
      `);

      el.iaUrn = 'urn:spotify:album:foobar123';
      await el.updateComplete;

      const iframe = el.shadowRoot?.querySelector('iframe');
      expect(iframe).to.exist;
      expect(iframe?.getAttribute('width')).to.equal('100%');
      expect(iframe?.getAttribute('height')).to.equal('80'); // important to keep at 80px
      expect(iframe?.getAttribute('src')).to.equal(el.spotifyUrl);
    });
    it("transforms IA's urn to a spotify embed URL", async () => {
      const el = await fixture<SpotifyPlayer>(html`
        <spotify-player iaUrn="urn:spotify:playlist:xyz123"></spotify-player>
      `);

      expect(el.spotifyUrl).to.equal(
        'https://open.spotify.com/embed/playlist/xyz123'
      );
    });
    it('needs: `iaUrn`', async () => {
      const el = await fixture<SpotifyPlayer>(
        html`<spotify-player></spotify-player>`
      );

      expect(el.iaUrn).to.be.empty;

      const invalidUriPlaceholder = el.shadowRoot?.querySelector('h3');
      expect(invalidUriPlaceholder).to.exist;
      expect(invalidUriPlaceholder?.innerHTML).to.contain(
        'Invalid Spotify URI:'
      );
    });

    it('passes the a11y audit', async () => {
      const el = await fixture<SpotifyPlayer>(
        html`<spotify-player></spotify-player>`
      );

      await expect(el).shadowDom.to.be.accessible();
    });
  });
});
