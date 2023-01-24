/* eslint-disable import/no-duplicates */
import { html, css, LitElement, TemplateResult, nothing } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';

import type { optionInterface } from '@internetarchive/ia-dropdown/dist/src/ia-dropdown';
import type { IaDropdown } from '@internetarchive/ia-dropdown/dist/src/ia-dropdown';
import '@internetarchive/ia-dropdown/dist/src/ia-dropdown';

import { channelSelectorRadio } from './style-radio';
import {
  channelTypes,
  iaButton,
  iaBetaButton,
  youtubeButton,
  spotifyButton,
  webampLink,
  iaLink,
  createDropdownOptions,
  dropdownOptionsInterface,
  channelIcons,
} from './channels';

export type displayStyle = 'dropdown' | 'radio';

export enum channelEvents {
  postInit = 'postInit',
  channelChange = 'channelChange',
}

@customElement('iaux-channel-selector')
export class ChannelSelector extends LitElement {
  @property({ attribute: true, type: Boolean, reflect: true }) youtube = false;

  @property({ attribute: true, type: Boolean, reflect: true }) spotify = false;

  @property({ attribute: true, type: Boolean, reflect: true }) beta = false;

  @property({ attribute: true, type: Boolean, reflect: true }) webamp = true;

  @property({ attribute: true, type: Boolean, reflect: true }) samples = false;

  @property({ attribute: true, type: String, reflect: true })
  backgroundTheme: 'light' | 'dark' = 'dark';

  @property({ type: String, reflect: true }) selected: channelTypes =
    channelTypes.ia;

  @property({ type: String, reflect: true }) displayStyle: displayStyle =
    'radio';

  @property({ type: String }) url = '';

  @query('ia-dropdown') iaDropdown!: IaDropdown;

  firstUpdated() {
    this.dispatchEvent(
      new CustomEvent(channelEvents.postInit, {
        detail: { channel: this.selected as channelTypes },
        composed: true,
        bubbles: true,
      })
    );
  }

  emitChannelChanged(): void {
    this.dispatchEvent(
      new CustomEvent(channelEvents.channelChange, {
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
    this.emitChannelChanged();
  }

  betaClicked() {
    if (this.selected === channelTypes.beta) {
      return;
    }
    // send analytic
    // set value
    this.selected = channelTypes.beta;
    // dispatch event
    this.emitChannelChanged();
  }

  spotifyClicked() {
    if (this.selected === channelTypes.spotify) {
      return;
    }
    // send analytic
    // set value
    this.selected = channelTypes.spotify;
    // dispatch event
    this.emitChannelChanged();
  }

  webampClicked() {
    if (this.selected === channelTypes.webamp) {
      return;
    }
    // send analytic
    // set value
    this.selected = channelTypes.webamp;
    // dispatch event
    this.emitChannelChanged();
  }

  youtubeClicked() {
    if (this.selected === channelTypes.youtube) {
      return;
    }
    // send analytic
    // set value
    this.selected = channelTypes.youtube;
    // dispatch event
    this.emitChannelChanged();
  }

  dropdownOptionSelected(selectedOption: optionInterface): void {
    // send analytic
    // set value
    this.selected = selectedOption.id as channelTypes;
    // dispatch event
    this.emitChannelChanged();
    // close dropdown
    this.iaDropdown.open = false;
  }

  get iaLinkSelector(): TemplateResult {
    const selectedClass = this.selected === channelTypes.ia ? 'selected' : '';
    return html`
      <li class=${selectedClass}>
        ${iaLink({
          samples: this.samples,
          selected: this.selected === channelTypes.ia,
          onClick: () => this.iaClicked(),
          href: this.url,
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
          onClick: () => this.iaClicked(),
        })}
      </li>
    `;
  }

  get iaBetaSelector(): TemplateResult {
    const selectedClass = this.selected === channelTypes.beta ? 'selected' : '';
    return html`
      <li class=${selectedClass}>
        ${iaBetaButton({
          selected: this.selected === channelTypes.beta,
          onClick: () => this.betaClicked(),
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
          href: this.url || window.location.href,
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

  get properIaSelector() {
    return this.selected === channelTypes.webamp
      ? this.iaLinkSelector
      : this.iaButtonSelector;
  }

  toggleDisplayStyle() {
    const nextDisplayStyle =
      this.displayStyle === 'dropdown' ? 'radio' : 'dropdown';

    this.displayStyle = nextDisplayStyle;
  }

  shouldShowChannelType(channelType: channelTypes): boolean {
    const channelSelected = this.selected === channelType;
    if (this.displayStyle === 'radio') {
      return true;
    }
    if (this.displayStyle === 'dropdown' && channelSelected) {
      return false;
    }
    return true;
  }

  get dropdownOptions() {
    const { samples, beta, spotify, webamp, youtube, url, selected } = this;
    return createDropdownOptions({
      selectedOption: selected,
      samples: !!samples,
      beta,
      spotify,
      webamp,
      youtube,
      href: url,
      onClick: this.dropdownOptionSelected.bind(this),
    } as unknown as dropdownOptionsInterface);
  }

  get currentlySelectedIcon(): TemplateResult {
    switch (this.selected) {
      case channelTypes.beta:
        return channelIcons.beta;
      case channelTypes.spotify:
        return channelIcons.spotify;
      case channelTypes.youtube:
        return channelIcons.youtube;
      case channelTypes.webamp:
        return channelIcons.webamp;
      default:
        return channelIcons.ia;
    }
  }

  get dropdown(): TemplateResult {
    return html`
      <ia-dropdown
        displayCaret
        .options=${this.dropdownOptions}
        .selectedOption=${this.selected}
        class=${this.backgroundTheme}
      >
        <span slot="dropdown-label">${this.currentlySelectedIcon}</span>
      </ia-dropdown>
    `;
  }

  get radioView(): TemplateResult {
    return html`
      <div id="selector-title"><h4>Play from:</h4></div>
      <div>
        <ul>
          ${this.properIaSelector} ${this.beta ? this.iaBetaSelector : nothing}
          ${this.youtube ? this.youtubeSelector : nothing}
          ${this.spotify ? this.spotifySelector : nothing}
          ${this.webamp ? this.webampSelector : nothing}
        </ul>
      </div>
    `;
  }

  render(): TemplateResult {
    return html`
      <section
        id=${this.displayStyle}
        class="${this.displayStyle} ${this.backgroundTheme}"
      >
        ${cache(this.displayStyle === 'radio' ? this.radioView : this.dropdown)}
      </section>
    `;
  }

  static styles = [
    css`
      :host {
        display: block;
      }

      :host(:focus) {
        outline: none;
      }

      section.radio ul,
      section.radio h4 {
        color: #fff;
      }

      section.radio.light h4 {
        color: #222;
      }

      ia-dropdown.light {
        --channel-selector-dropdown-text-color: #222;
        color: var(--channel-selector-dropdown-text-color, #222);
        --dropdownCaretColor: var(--channel-selector-dropdown-text-color, #222);
      }

      ia-dropdown {
        --dropdownBgColor: #333;
        --dropdownHoverBgColor: #474747;
        color: var(--channel-selector-dropdown-text-color, #fff);
        --dropdownCaretColor: var(--channel-selector-dropdown-text-color, #fff);
      }

      ia-dropdown.light img.ia,
      ia-dropdown.light img.ia-beta,
      ia-dropdown.light img.webamp {
        filter: invert(1);
      }

      h4 {
        margin: 0;
      }

      a:link,
      a:visited,
      a:active,
      a {
        color: inherit;
        text-decoration: none;
      }

      button {
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        margin: 0;
      }

      li > *,
      #dropdown .selected-option {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        width: 100%;
      }

      li:hover {
        background-color: var(--channel-selector-hover-bg-color, #474747);
      }

      li.selected {
        background-color: #fff;
        color: #2c2c2c;
      }

      ul,
      li {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      li {
        display: flex;
        height: 30px;
        background-color: #333;
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

      li a.ia {
        display: flex;
      }

      *[slot='dropdown-label'] img {
        height: 30px !important;
        width: 30px !important;
        display: block;
      }
    `,
    channelSelectorRadio,
  ];
}
