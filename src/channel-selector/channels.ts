import { html, TemplateResult } from 'lit';
import { optionInterface } from '@internetarchive/ia-dropdown/dist/src/ia-dropdown';
import '@internetarchive/ia-dropdown/dist/src/ia-icon-label';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';

export enum channelTypes {
  ia = 'ia',
  beta = 'beta',
  youtube = 'youtube',
  spotify = 'spotify',
  webamp = 'webamp',
}

enum channelLabels {
  iaSamples = 'Samples',
  iaPlayer = 'Player',
  beta = 'Beta',
  spotify = 'Spotify',
  webamp = 'Webamp',
  youtube = 'YouTube',
}

export type channelSpecs = {
  onClick: Function;
  selected: boolean;
  samples?: boolean | null | undefined;
  href?: string | undefined;
};

export type optionOnClickCallback =
  | Event
  | CustomEvent
  | optionInterface
  | undefined;

type iconInterface = {
  [key in channelTypes]: TemplateResult;
};

export const channelIcons: iconInterface = {
  ia: html`<img
    class="ia"
    src="/images/music-theater/internet-archive.svg"
    alt="Internet Archive logo"
    style="height: 20px; width: 20px;"
  />`,
  beta: html`<img
    class="ia-beta"
    src="/images/music-theater/streaming.svg"
    alt="Internet Archive beta player logo"
    style="height: 20px; width: 20px;"
  />`,
  spotify: html`<img
    class="spotify"
    src="/images/music-theater/spotify.svg"
    alt="spotify logo"
    style="display: block;"
  />`,
  webamp: html`<img
    class="webamp"
    src="/images/music-theater/webamp.svg"
    alt="webamp logo"
    style="height: 20px;"
  />`,
  youtube: html`<img
    class="youtube"
    src="/images/music-theater/youtube.svg"
    alt="youtube logo"
    style="height: 20px; width: 20px; display: block;"
  />`,
};

export const iaLabel = (
  label:
    | channelLabels.iaPlayer
    | channelLabels.iaSamples = channelLabels.iaPlayer,
  selected: boolean
) => {
  const filter = selected ? 'invert(1)' : 'invert(0)';
  const styles = styleMap({
    filter,
    height: '20px',
    width: '20px',
  });
  const classes = classMap({
    selected,
    'invert-icon-at-hover-selected': selected,
  });

  return html`
    <ia-icon-label class=${classes}>
      <span slot="icon" style=${styles}>${channelIcons.ia}</span>
      <span>${label}</span>
    </ia-icon-label>
  `;
};

export const betaLabel = (selected: boolean) => {
  const filter = selected ? 'invert(1)' : 'invert(0)';
  const styles = styleMap({
    filter,
    height: '20px',
    width: '20px',
  });
  const classes = classMap({
    selected,
    'invert-icon-at-hover-selected': selected,
  });

  return html`
    <ia-icon-label class=${classes}>
      <span slot="icon" style=${styles}>${channelIcons.beta}</span>
      <span>${channelLabels.beta}</span>
    </ia-icon-label>
  `;
};

export const spotifyLabel = (selected: boolean) => html`
  <ia-icon-label class="${selected ? 'selected' : ''}">
    <span slot="icon">${channelIcons.spotify}</span>
    <span>${channelLabels.spotify}</span>
  </ia-icon-label>
`;

export const webampLabel = (selected: boolean) => {
  const filter = selected ? 'invert(1)' : 'invert(0)';
  const styles = styleMap({
    filter,
    height: '20px',
    width: '20px',
  });
  const classes = classMap({
    selected,
    'invert-icon-at-hover-selected': selected,
  });

  return html`
    <ia-icon-label class=${classes}>
      <span slot="icon" style=${styles}>${channelIcons.webamp}</span>
      <span>Webamp</span>
    </ia-icon-label>
  `;
};

export const youtubeLabel = (selected: boolean) => html`
  <ia-icon-label class="${selected ? 'selected' : ''}">
    <span slot="icon">${channelIcons.youtube}</span>
    <span>${channelLabels.youtube}</span>
  </ia-icon-label>
`;

/** IA <a> */
export const iaLink = ({
  samples,
  onClick,
  href,
  selected,
}: channelSpecs): TemplateResult => {
  const label = samples ? channelLabels.iaSamples : channelLabels.iaPlayer;
  return html`
    <a href=${href} @click=${() => onClick()}>${iaLabel(
    label,
    selected
  )}</button>
  `;
};

/** IA <button> */
export const iaButton = ({
  samples,
  onClick,
  selected,
}: channelSpecs): TemplateResult => {
  const label = samples ? channelLabels.iaSamples : channelLabels.iaPlayer;
  return html`
    <button @click=${(x: optionOnClickCallback) => onClick(x)} class="ia">
      ${iaLabel(label, selected)}
    </button>
  `;
};

export const iaBetaButton = ({
  onClick,
  selected,
}: channelSpecs) => html`<button
  @click=${(x: optionOnClickCallback) => onClick(x)}
  class="ia-beta"
>
  ${betaLabel(selected)}
</button>`;

export const spotifyButton = ({
  onClick,
  selected,
}: channelSpecs) => html`<button
  @click=${(x: optionOnClickCallback) => onClick(x)}
  class="sp"
>
  ${spotifyLabel(selected)}
</button>`;

export const webampLink = ({ onClick, href, selected }: channelSpecs) => {
  const webampUrl = `${href}?webamp=default`;
  return html`
    <a href=${webampUrl} @click=${(x: optionOnClickCallback) =>
    onClick(x)} class="wa">${webampLabel(selected)}</button>
  `;
};

export const youtubeButton = ({
  onClick,
  selected,
}: channelSpecs) => html`<button
  @click=${(x: optionOnClickCallback) => onClick(x)}
  class="yt"
>
  ${youtubeLabel(selected)}
</button>`;

/** Dropdown options */
export interface dropdownOptionsInterface extends channelSpecs {
  spotify: boolean;
  beta: boolean;
  webamp: boolean;
  youtube: boolean;
  selectedOption: channelTypes;
}

export const iaLinkDropdownOption = ({
  samples,
  onClick,
  href,
  selectedOption,
}: dropdownOptionsInterface): optionInterface => {
  const selectedHandler = (x: optionOnClickCallback) => {
    onClick(x);
  };
  return {
    url: href,
    selectedHandler,
    label: iaLabel(
      samples ? channelLabels.iaSamples : channelLabels.iaPlayer,
      selectedOption === channelTypes.ia
    ),
    id: channelTypes.ia,
  };
};

export const iaButtonDropdownOption = ({
  samples,
  onClick,
  selectedOption,
}: dropdownOptionsInterface): optionInterface => {
  const selectedHandler = (x: optionOnClickCallback) => {
    onClick(x);
  };
  return {
    selectedHandler,
    label: iaLabel(
      samples ? channelLabels.iaSamples : channelLabels.iaPlayer,
      selectedOption === channelTypes.ia
    ),
    id: channelTypes.ia,
  };
};

export const betaDropdownOption = ({
  onClick,
  selectedOption,
}: dropdownOptionsInterface): optionInterface => {
  const selectedHandler = (x: optionOnClickCallback) => {
    onClick(x);
  };
  return {
    selectedHandler,
    label: betaLabel(selectedOption === channelTypes.beta),
    id: channelTypes.beta,
  };
};

export const spotifyDropdownOption = ({
  onClick,
  selectedOption,
}: dropdownOptionsInterface): optionInterface => {
  const selectedHandler = (x: optionOnClickCallback) => {
    onClick(x);
  };
  return {
    selectedHandler,
    label: spotifyLabel(selectedOption === channelTypes.spotify),
    id: channelTypes.spotify,
  };
};

export const webampDropdownOption = ({
  href,
  onClick,
  selectedOption,
}: dropdownOptionsInterface): optionInterface => {
  const selectedHandler = (x: optionOnClickCallback) => {
    onClick(x);
  };
  return {
    url: `${href}?webamp=default`,
    selectedHandler,
    label: webampLabel(selectedOption === channelTypes.webamp),
    id: channelTypes.webamp,
  };
};

export const youtubeDropdownOption = ({
  onClick,
  selectedOption,
}: dropdownOptionsInterface): optionInterface => {
  const selectedHandler = (x: optionOnClickCallback) => {
    onClick(x);
  };
  return {
    selectedHandler,
    label: youtubeLabel(selectedOption === channelTypes.youtube),
    id: channelTypes.youtube,
  };
};

export const createDropdownOptions = (
  ddOptions: dropdownOptionsInterface
): any[] => {
  const { spotify, beta, youtube, selectedOption } = ddOptions;

  const webampSelected = selectedOption === channelTypes.webamp;
  return [
    webampSelected
      ? iaLinkDropdownOption(ddOptions)
      : iaButtonDropdownOption(ddOptions),
    beta ? betaDropdownOption(ddOptions) : null,
    spotify ? spotifyDropdownOption(ddOptions) : null,
    youtube ? youtubeDropdownOption(ddOptions) : null,
    webampDropdownOption(ddOptions),
  ].filter(Boolean) as any[];
};
