/*
YouTube Embed iFrame:
https://developers.google.com/youtube/player_parameters

IA youtube urn:
urn:youtube:p3o5PzqmYik
*/
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('youtube-player')
export class YouTubePlayer extends LitElement {
  @property({ type: String, reflect: true }) iaUrn = '';

  @property({ type: Boolean, reflect: true }) display: boolean = false;

  @property({ type: String }) baseHost: string = 'https://archive.org';

  @query('iframe') iframe!: HTMLIFrameElement;

  get youTubeUrl(): string {
    if (!this.iaUrn || !this.iaUrn.match(/urn:youtube:/g)) {
      return '';
    }

    const youTubeId = this.iaUrn.replace(/urn:youtube:/g, '');
    const youtubeId = youTubeId.replace(/:/g, '/');
    const otherParams = `origin=${this.baseHost}&widgetid=1&autoplay=1&rel=0`;
    const finalUrl = `https://www.youtube.com/embed/${youtubeId}?${otherParams}`;
    return finalUrl;
  }

  render() {
    const url = this.youTubeUrl;
    if (!url) {
      return nothing;
    }

    return html`
      <iframe
        id="embed-iframe"
        src="${url}"
        width="100%"
        height="200"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="YouTube Player"
      ></iframe>
    `;
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
      `,
    ];
  }
}
