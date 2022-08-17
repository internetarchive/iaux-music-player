import { html, fixture, expect } from '@open-wc/testing';
import type { YouTubePlayer } from '../src/players/youtube-player';
import '../src/players/youtube-player';

describe('`<youtube-player>`', () => {
  describe('Defaults', () => {
    it('displays iframe', async () => {
      const el = await fixture<YouTubePlayer>(html`
        <youtube-player iaYouTubeUrn="urn:youtube:foobar123"></youtube-player>
      `);

      const iframe = el.shadowRoot?.querySelector('iframe');
      expect(iframe).to.exist;
      expect(iframe?.getAttribute('width')).to.equal('100%');
      expect(iframe?.getAttribute('height')).to.equal('200');
      expect(iframe?.getAttribute('src')).to.equal(el.youTubeUrl);
      expect(el.baseHost).to.equal('https://archive.org');
    });
    it("transforms IA's urn to a YouTube embed URL", async () => {
      const el = await fixture<YouTubePlayer>(html`
        <youtube-player iaYouTubeUrn="urn:youtube:xyz123"></youtube-player>
      `);

      expect(el.youTubeUrl).to.equal(
        'https://www.youtube.com/embed/xyz123?origin=https://archive.org&widgetid=1&autoplay=1&rel=0'
      );
      expect(el.youTubeUrl).to.contain('rel=0'); // do not display related videos at the end
      expect(el.youTubeUrl).to.contain('autoplay=1'); // auto plays video after loading
      expect(el.youTubeUrl).to.contain('origin=https://archive.org'); // default origin
    });
    it('needs: `iaYouTubeUrn`', async () => {
      const el = await fixture<YouTubePlayer>(
        html`<youtube-player></youtube-player>`
      );

      expect(el.iaYouTubeUrn).to.be.empty;

      const invalidUriPlaceholder = el.shadowRoot?.querySelector('h3');
      expect(invalidUriPlaceholder).to.exist;
      expect(invalidUriPlaceholder?.innerHTML).to.contain(
        'Invalid YouTube ID:'
      );
    });

    it('passes the a11y audit', async () => {
      const el = await fixture<YouTubePlayer>(
        html`<youtube-player></youtube-player>`
      );

      await expect(el).shadowDom.to.be.accessible();
    });
  });
});
