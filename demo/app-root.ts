/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-globals */
import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { channelTypes } from '../src/channel-selector/channels';
import '../src/channel-selector/channel-selector';
import '../src/players/spotify-player';
import '../src/players/youtube-player';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property({ type: String, reflect: true }) viewToShow: 'components' | 'data' =
    'components';

  @property({ type: String }) selectedByDropdown: channelTypes =
    channelTypes.beta;

  @property({ type: String }) selectedByDropdownOnload: channelTypes | '' = '';

  @property({ type: String }) selectedByRadio: channelTypes = channelTypes.beta;

  @property({ type: String }) selectedByRadioOnload: channelTypes | '' = '';

  override updated(changed: Record<string, any>): void {
    if (changed.has('viewToShow')) {
      document
        .querySelector('body')
        ?.removeAttribute(changed.get('viewToShow'));
      document.querySelector('body')?.setAttribute(this.viewToShow, '');
    }
  }

  get startAtWebamp() {
    const searchParams = new URLSearchParams(location.search.slice(1));
    return searchParams.has('webamp');
  }

  get playerByRadio(): TemplateResult {
    if (this.selectedByRadio === channelTypes.spotify) {
      return html`<spotify-player
        iAspotifyUrn="urn:spotify:track:6smNPW8bUwL8VbSzgz0CLf"
      ></spotify-player>`;
    }

    if (this.selectedByRadio === channelTypes.youtube) {
      return html`<youtube-player
        iaYouTubeUrn="urn:youtube:p3o5PzqmYik"
      ></youtube-player>`;
    }

    return html`<h2>Player type: ${this.selectedByRadio}</h2>`;
  }

  get playerByDropdown(): TemplateResult {
    if (this.selectedByDropdown === channelTypes.spotify) {
      return html`<spotify-player
        iAspotifyUrn="urn:spotify:track:6smNPW8bUwL8VbSzgz0CLf"
      ></spotify-player>`;
    }

    if (this.selectedByDropdown === channelTypes.youtube) {
      return html`<youtube-player
        iaYouTubeUrn="urn:youtube:p3o5PzqmYik"
      ></youtube-player>`;
    }

    return html`<h2>Player type: ${this.selectedByDropdown}</h2>`;
  }

  render() {
    return html`
      <section id="app-root">
        <h1>
          Music Player Things:
          <button @click=${() => (this.viewToShow = 'components')}>
            Components
          </button>
          <button @click=${() => (this.viewToShow = 'data')}>Data</button>
        </h1>
        <hr />
        <hr />
        <br /><br />
        ${this.viewToShow === 'components'
          ? this.componentsView
          : this.dataView}
      </section>
    `;
  }

  get dataView(): TemplateResult {
    return html`
      <section id="data">
        <div></div>
      </section>
    `;
  }

  get componentsView(): TemplateResult {
    const url = `${location.origin}/demo`;
    return html`
      <section id="components">
        <channel-selector
          spotify
          youtube
          beta
          samples
          .selected=${this.startAtWebamp
            ? channelTypes.webamp
            : this.selectedByRadio}
          @postInit=${(e: CustomEvent) => {
            this.selectedByRadioOnload = e.detail.channel as channelTypes;
          }}
          @channelChange=${(e: CustomEvent) => {
            this.selectedByRadio = e.detail.channel as channelTypes;
          }}
          .url=${url}
        >
        </channel-selector>

        <section class="player">${this.playerByRadio}</section>
        <section class="details">
          <h2>Selected by radio</h2>
          <h2>on first load: ${this.selectedByRadioOnload}</h2>
          <h2>on change: ${this.selectedByRadio}</h2>
        </section>

        <channel-selector
          spotify
          youtube
          beta
          .displayStyle=${'dropdown'}
          .url=${url}
          @postInit=${(e: CustomEvent) => {
            this.selectedByDropdownOnload = e.detail.channel as channelTypes;
          }}
          @channelChange=${(e: CustomEvent) => {
            this.selectedByDropdown = e.detail.channel as channelTypes;
          }}
          .selected=${
            // eslint-disable-next-line no-nested-ternary
            this.startAtWebamp
              ? channelTypes.webamp
              : this.selectedByDropdown
              ? this.selectedByDropdown
              : channelTypes.beta
          }
        >
        </channel-selector>
        <section class="player">${this.playerByDropdown}</section>
        <section class="details">
          <h2>Selected by dropdown</h2>
          <h2>on first load: ${this.selectedByDropdownOnload}</h2>
          <h2>on change: ${this.selectedByDropdown}</h2>
        </section>
      </section>
    `;
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    .details {
      margin: 30px auto;
      padding: 10px;
    }

    .player {
      display: block;
      margin: 10px auto;
      border: 1px solid green;
      text-align: center;
    }
  `;
}
