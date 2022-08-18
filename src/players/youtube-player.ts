/*
YouTube Embed iFrame:
https://developers.google.com/youtube/player_parameters

IA youtube urn:
urn:youtube:p3o5PzqmYik
*/
import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('youtube-player')
export class YouTubePlayer extends LitElement {
  @property({ type: String, reflect: true }) iaYouTubeUrn = '';

  @property({ type: Boolean, reflect: true }) display: boolean = false;

  @property({ type: String }) baseHost: string = 'https://archive.org';

  @query('iframe') iframe!: HTMLIFrameElement;

  get youTubeUrl(): string {
    if (!this.iaYouTubeUrn || !this.iaYouTubeUrn.match(/urn:youtube:/g)) {
      return '';
    }

    const youTubeId = this.iaYouTubeUrn.replace(/urn:youtube:/g, '');
    const youtubeId = youTubeId.replace(/:/g, '/');
    const otherParams = `origin=${this.baseHost}&widgetid=1&autoplay=1&rel=0`;
    return `https://www.youtube.com/embed/${youtubeId}?${otherParams}`;
  }

  render() {
    const url = this.youTubeUrl;
    if (!url) {
      return html`<h3>Invalid YouTube ID: ${this.iaYouTubeUrn}</h3>`;
    }

    return html`
      <iframe
        id="embed-iframe"
        src="${url}"
        width="100%"
        height="180"
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
