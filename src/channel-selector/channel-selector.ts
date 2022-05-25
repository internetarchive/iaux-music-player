import { html, css, LitElement, TemplateResult, nothing } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';

import type { optionInterface } from '@internetarchive/ia-dropdown/dist/src/ia-dropdown';
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
} from './channels';

export type displayStyle = 'dropdown' | 'radio';

export enum channelEvents {
  postInit = 'postInit',
  channelChange = 'channelChange',
}

@customElement('channel-selector')
export class ChannelSelector extends LitElement {
  @property({ attribute: true, type: Boolean, reflect: true }) youtube = false;

  @property({ attribute: true, type: Boolean, reflect: true }) spotify = false;

  @property({ attribute: true, type: Boolean, reflect: true }) beta = false;

  @property({ attribute: true, type: Boolean, reflect: true }) webamp = true;

  @property({ attribute: true, type: Boolean, reflect: true }) samples = false;

  @property({ type: String, reflect: true }) selected: channelTypes =
    channelTypes.ia;

  @property({ type: String, reflect: true }) displayStyle: displayStyle =
    'radio';

  @property({ type: String }) url = '';

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

  get dropdown(): TemplateResult {
    return html`
      <ia-dropdown
        displayCaret
        .options=${this.dropdownOptions}
        .selectedOption=${this.selected}
      >
        <div slot="dropdown-label" class="dropdown-label">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path
                d="m93 95.6190775v4.3809225h-86l.00091489-4.3809225zm-3.3076923-8.0682881v5.8399885h-79.3846154v-5.8399885zm-2.469108-61.3914468.9542264.4869761.4775698 7.7869616.4775698 12.6529979v12.1688152l-.4775698 15.1688858-.0794428 10.2190486-1.3523534.4068998h-73.7729585l-1.4317962-.4068998-.5560994-10.2190486-.4784829-15.0878783v-12.1678841l.4784829-12.7349365.4364787-7.8288621.9953175-.4450756zm2.469108-11.0620805v8.7609138h-79.3846154v-8.7609138zm-39.6923077-15.0972621 43 9.75392865-1.7107266 3.00007055h-81.7325318l-2.5567416-2.4330181z"
                fill="#fff"
              />
              <path
                d="m51.6028793 29c7.1190869 7.5359754 22.8971207 15 15.9901161 35.2579416 0-13.8609831-3.3266359-16.0787404-11.6432258-24.3953303.228824 12.6744366.5667995 13.802523.1932361 24.374579-.1341927 3.8850801.3452129 9.4861753-2.6877233 12.6835908-3.8961215 4.1053124-11.3900578 6.002907-16.7795264 4.6437583-4.4827612-1.1344218-6.853801-6.228533-5.0902551-10.9486985 2.2450074-6.0280765 10.8278993-9.3863964 17.0615124-7.555321 1.2866177.3748446 2.711055 1.3636433 2.711055 1.3636433 0-12.4247052.4098317-23.8246554.244811-35.4241632z"
                fill="#2c2c2c"
              />
            </g>
          </svg>
        </div>
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
      <section id=${this.displayStyle} class=${this.displayStyle}>
        ${cache(this.displayStyle === 'radio' ? this.radioView : this.dropdown)}
      </section>
    `;
  }

  static styles = [
    css`
      :host {
        display: block;
        color: var(--channel-selector-text-color, #fff);
      }

      #selector-title,
      .selected-option {
        color: var(--channel-selector-title-color, #fff);
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

      li:hover,
      li.selected {
        background-color: #fff;
        color: #2c2c2c;
        cursor: pointer;
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
        background-color: #222;
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

      .dropdown-label {
        height: 30px;
        width: 30px;
      }
    `,
    channelSelectorRadio,
  ];
}
