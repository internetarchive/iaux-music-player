/*
Spotify embed doc:
https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-category

IA spotify urn:
urn:spotify:track:45Wr4pcMlIEAXC8hGFjfG
*/
import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('spotify-player')
export class SpotifyPlayer extends LitElement {
  @property({ type: String, reflect: true }) iaSpotifyUrn = '';

  @property({ type: Boolean, reflect: true }) display: boolean = false;

  @query('iframe') iframe!: HTMLIFrameElement;

  get spotifyUrl(): string {
    if (!this.iaSpotifyUrn || !this.iaSpotifyUrn.match(/urn:spotify:/g)) {
      return '';
    }

    const spotifyId = this.iaSpotifyUrn.replace(/urn:spotify:/g, '');
    const spotifyPath = spotifyId.replace(/:/g, '/');
    return `https://open.spotify.com/embed/${spotifyPath}`;
  }

  render() {
    const url = this.spotifyUrl;
    if (!url) {
      return html`<h3>Invalid Spotify URI: ${this.iaSpotifyUrn}</h3>`;
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
