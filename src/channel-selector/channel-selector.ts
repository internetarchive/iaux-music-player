import {
  html,
  css,
  LitElement,
  TemplateResult,
  nothing,
  PropertyValues,
} from 'lit';
import { property, customElement } from 'lit/decorators.js';
// import { SharedResizeObserver } from '@internetarchive/shared-resize-observer';
import { channelSelectorDropDown } from './style-dropdown';
import { channelSelectorRadio } from './style-radio';
import {
  channelTypes,
  iaButton,
  continuousPlayButton,
  youtubeButton,
  spotifyButton,
  webampLink,
  iaLink,
  iaContinuousLabel,
  spotifyLabel,
  webampLabel,
  youtubeLabel,
  iaLabel,
} from './channels';

export type displayStyle = 'dropdown' | 'radio';

@customElement('channel-selector')
export class ChannelSelector extends LitElement {
  @property({ attribute: true, type: Boolean, reflect: true }) youtube = null;

  @property({ attribute: true, type: Boolean, reflect: true }) spotify = null;

  @property({ attribute: true, type: Boolean, reflect: true }) continuousPlay =
    null;

  @property({ attribute: true, type: Boolean, reflect: true }) webamp = true;

  @property({ attribute: true, type: Boolean, reflect: true }) samples = null;

  @property({ type: String }) selected: channelTypes = channelTypes.ia;

  @property({ type: String, reflect: true }) displayStyle: displayStyle =
    'radio'; // for now

  @property({ type: Boolean }) dropdownOpen = false;

  @property({ attribute: false }) sharedRO = undefined;

  updated(changed: PropertyValues) {
    if (changed.has('sharedRO')) {
      if (changed.get('sharedRO') !== this.sharedRO) {
        this.setupSharedResizeObserver();
      }
    }
  }

  setupSharedResizeObserver() {}

  emitChannelSelected(): void {
    this.dispatchEvent(
      new CustomEvent('channelSelected', {
        detail: { channel: this.selected },
        composed: true,
        bubbles: true,
      })
    );
  }

  iaClicked() {
    if (this.selected === channelTypes.ia) {
      return;
    }
    // send analytic
    // set value
    this.selected = channelTypes.ia;
    // dispatch event
    this.emitChannelSelected();
  }

  iaContinuousClicked() {
    if (this.selected === channelTypes.continuous) {
      return;
    }
    // send analytic
    // set value
    this.selected = channelTypes.continuous;
    // dispatch event
    this.emitChannelSelected();
  }

  spotifyClicked() {
    if (this.selected === channelTypes.spotify) {
      return;
    }
    // send analytic
    // set value
    this.selected = channelTypes.spotify;
    // dispatch event
    this.emitChannelSelected();
  }

  webampClicked() {
    if (this.selected === channelTypes.webamp) {
      return;
    }
    // send analytic
    // set value
    this.selected = channelTypes.webamp;
    // dispatch event
    this.emitChannelSelected();
  }

  youtubeClicked() {
    if (this.selected === channelTypes.youtube) {
      return;
    }
    // send analytic
    // set value
    this.selected = channelTypes.youtube;
    // dispatch event
    this.emitChannelSelected();
  }

  get iaLinkSelector(): TemplateResult {
    const selectedClass = this.selected === channelTypes.ia ? 'selected' : '';
    return html`
      <li class=${selectedClass}>
        ${iaLink({
          samples: this.samples,
          selected: this.selected === channelTypes.ia,
          onClick: () => this.webampClicked(),
        })}
      </li>
    `;
  }

  get iaButtonSelector(): TemplateResult {
    const selectedClass = this.selected === channelTypes.ia ? 'selected' : '';
    return html`
      <li class=${selectedClass}>
        ${iaButton({
          samples: this.samples,
          selected: this.selected === channelTypes.ia,
          onClick: () => this.webampClicked(),
        })}
      </li>
    `;
  }

  get contPlaySelector(): TemplateResult {
    const selectedClass =
      this.selected === channelTypes.continuous ? 'selected' : '';
    return html`
      <li class=${selectedClass}>
        ${continuousPlayButton({
          selected: this.selected === channelTypes.continuous,
          onClick: () => this.iaContinuousClicked(),
        })}
      </li>
    `;
  }

  get spotifySelector(): TemplateResult {
    const selectedClass =
      this.selected === channelTypes.spotify ? 'selected' : '';
    return html`
      <li class=${selectedClass}>
        ${spotifyButton({
          selected: this.selected === channelTypes.spotify,
          onClick: () => this.spotifyClicked(),
        })}
      </li>
    `;
  }

  get webampSelector(): TemplateResult {
    const selectedClass =
      this.selected === channelTypes.webamp ? 'selected' : '';
    return html`
      <li class=${selectedClass}>
        ${webampLink({
          href: window.location.href,
          selected: this.selected === channelTypes.webamp,
          onClick: () => this.webampClicked(),
        })}
      </li>
    `;
  }

  get youtubeSelector(): TemplateResult {
    const selectedClass =
      this.selected === channelTypes.youtube ? 'selected' : '';
    return html`
      <li class=${selectedClass}>
        ${youtubeButton({
          selected: this.selected === channelTypes.youtube,
          onClick: () => this.youtubeClicked(),
        })}
      </li>
    `;
  }

  get selectedLabel() {
    switch (this.selected) {
      case channelTypes.continuous:
        return iaContinuousLabel;
      case channelTypes.spotify:
        return spotifyLabel;
      case channelTypes.webamp:
        return webampLabel;
      case channelTypes.youtube:
        return youtubeLabel;
      default: {
        const labelType = this.samples ? 'Samples' : 'Player';
        return iaLabel(labelType);
      }
    }
  }

  get properIaSelector() {
    return this.selected === channelTypes.webamp
      ? this.iaLinkSelector
      : this.iaButtonSelector;
  }

  toggleDisplayStyle() {
    const nextDisplayStyle =
      this.displayStyle === 'dropdown' ? 'radio' : 'dropdown';

    this.displayStyle = nextDisplayStyle;
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  render(): TemplateResult {
    const dropdownState =
      this.displayStyle === 'dropdown' && this.dropdownOpen ? '' : 'close';
    const playFromLabel =
      this.displayStyle === 'radio'
        ? html` <div id="selector-title"><h4>Play from:</h4></div>`
        : nothing;

    return html`
      <section id=${this.displayStyle} class=${this.displayStyle}>
        ${playFromLabel}
        <div>
          <button class="selected-option" @click=${() => this.toggleDropdown()}>
            <span class="sr-only">Currently selcted: </span>
            ${this.selectedLabel}
          </button>
          <ul class=${dropdownState}>
            ${this.properIaSelector}
            ${this.continuousPlay ? this.contPlaySelector : nothing}
            ${this.youtube ? this.youtubeSelector : nothing}
            ${this.spotify ? this.spotifySelector : nothing}
            ${this.webamp ? this.webampSelector : nothing}
          </ul>
        </div>
      </section>
    `;
  }

  static styles = [
    css`
      :host {
        display: block;
        color: var(--channel-selector-text-color, #fff);
      }

      a:link,
      a:visited,
      a:active {
        color: var(--channel-selector-text-color, #fff);
        text-decoration: none;
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
      }

      li > *,
      #dropdown .selected-option {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        padding: 5px;
        width: 100%;
      }

      li:hover,
      li.selected {
        background-color: #fff;
        color: #222;
        cursor: pointer;
      }

      li:hover a {
        color: #222;
      }

      ul,
      li {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      #dropdown .close,
      .sr-only {
        width: 1px;
        height: 1px;
        padding: 0px;
        margin: -1px;
        overflow: hidden;
        clip: rect(0px, 0px, 0px, 0px);
        border: 0px;
        display: block;
      }

      #radio .selected-option {
        display: none;
      }

      li .ia.selected .channel-img,
      li .ia:hover .channel-img {
        filter: invert(1);
      }

      li .wa .channel-img {
        filter: invert(1);
      }

      li .wa.selected .channel-img,
      li .wa:hover .channel-img {
        filter: unset;
      }

      .channel-img {
        margin-right: 5px;
      }

      .channel-img img {
        height: 20px;
      }
    `,
    channelSelectorDropDown,
    channelSelectorRadio,
  ];
}
