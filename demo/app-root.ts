/* eslint-disable no-restricted-globals */
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { channelTypes } from '../src/channel-selector/channels';
import '../src/channel-selector/channel-selector';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property({ type: String }) selectedByDropdown: channelTypes | '' = '';

  @property({ type: String }) selectedByDropdownOnload: channelTypes | '' = '';

  @property({ type: String }) selectedByRadio: channelTypes | '' = '';

  @property({ type: String }) selectedByRadioOnload: channelTypes | '' = '';

  get startAtWebamp() {
    const searchParams = new URLSearchParams(location.search.slice(1));
    return searchParams.has('webamp');
  }

  render() {
    const url = `${location.origin}/demo`;
    return html`
      <br />
      <br />
      <channel-selector spotify youtube continuousPlay samples
        .selected=${
          this.startAtWebamp ? channelTypes.webamp : channelTypes.continuous
        }
        @postInit=${(e: CustomEvent) => {
          this.selectedByRadioOnload = e.detail.channel as channelTypes;
        }}
        @channelChange=${(e: CustomEvent) => {
          this.selectedByRadio = e.detail.channel as channelTypes;
        }}
        .url=${url}
      >
      </channel-selector>

      <section class='details'>
        <h2>Selected by radio</2>
        <h2>on first load: ${this.selectedByRadioOnload}</h2>
        <h2>on change: ${this.selectedByRadio}</h2>
      </section>

      <channel-selector
      spotify
      youtube
      continuousPlay
      .displayStyle=${'dropdown'}
      .url=${url}
      @postInit=${(e: CustomEvent) => {
        this.selectedByDropdownOnload = e.detail.channel as channelTypes;
      }}
      @channelChange=${(e: CustomEvent) => {
        this.selectedByDropdown = e.detail.channel as channelTypes;
      }}
    >
    </channel-selector>
    <section class='details'>
    <h2>Selected by dropdown</2>
    <h2>on first load: ${this.selectedByDropdownOnload}</h2>
    <h2>on change: ${this.selectedByDropdown}</h2>
    </section>
    `;
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
      color: #fff;
    }

    .details {
      margin: 30px auto;
      padding: 10px;
    }
  `;
}
