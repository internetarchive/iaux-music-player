/*
Spotify embed doc:
https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-category
https://open.spotify.com/embed/album/7mzrIsaAjnXihW3InKjlC3 
https://open.spotify.com/embed/track/0Om9WAB5RS09L80DyOfTNa

IA spotify urn:
urn:spotify:track:45Wr4pcMlIEAXC8hGFjfG
*/
import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('spotify-player')
export class SpotifyPlayer extends LitElement {
  @property({ type: String, attribute: true, reflect: true }) iaUrn = '';

  @query('iframe') iframe!: HTMLIFrameElement;

  get spotifyUrl(): string {
    if (!this.iaUrn || !this.iaUrn.match(/urn:spotify:/g)) {
      return '';
    }

    const spotifyId = this.iaUrn.replace(/urn:spotify:/g, '');
    const spotifyPath = spotifyId.replace(/:/g, '/');
    return `https://open.spotify.com/embed/${spotifyPath}`;
  }

  render() {
    const url = this.spotifyUrl;
    if (!url) {
      return html`<h3>Invalid Spotify URI: ${this.iaUrn}</h3>`;
    }

    return html`
      <iframe
        id="embed-iframe"
        src="${url}"
        width="100%"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="Spotify Player"
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
