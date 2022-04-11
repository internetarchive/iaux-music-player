import { html, TemplateResult } from 'lit';

export enum channelTypes {
  ia = 'ia',
  continuous = 'continuous',
  youtube = 'youtube',
  spotify = 'spotify',
  webamp = 'webamp',
}

export type channelSpecs = {
  onClick: Function;
  selected: boolean;
  samples?: boolean | null | undefined;
  href?: string | undefined;
};

type playbackLabel = 'Samples' | 'Player';

export const iaLabel = (label: playbackLabel) => html`
  <span class="channel-img ia"
    ><img src="../assets/internet-archive.svg" alt="internet archive logo"
  /></span>
  <span class="channel-name">Internet Archive ${label}</span>
`;

export const iaContinuousLabel = html`
  <span class="channel-img ia-continuous"
    ><img
      src="../assets/continuous-play.svg"
      alt="internet archive continuous play logo"
  /></span>
  <span class="channel-name">Continuous Play (beta)</span>
`;

export const spotifyLabel = html`
  <span class="channel-img spotify"
    ><img src="../assets/spotify.svg" alt="spotify logo"
  /></span>
  <span class="channel-name">Spotify</span>
`;

export const webampLabel = html`
  <span class="channel-img webamp"
    ><img src="../assets/webamp.svg" alt="webamp logo"
  /></span>
  <span class="channel-name">Webamp</span>
`;

export const youtubeLabel = html`
  <span class="channel-img youtube">
    <img src="../assets/youtube.svg" alt="youtube logo" />
  </span>
  <span class="channel-name">Youtube</span>
`;

/** IA <a> */
export const iaLink = ({
  samples,
  onClick,
  href,
  selected,
}: channelSpecs): TemplateResult => {
  const label: playbackLabel = samples ? 'Samples' : 'Player';
  const selectedClass = selected ? 'selected' : '';
  return html`
    <a href=${href} @click=${() => onClick()} class=${selectedClass}>${iaLabel(
    label
  )}</button>
  `;
};

/** IA <button> */
export const iaButton = ({
  samples,
  onClick,
  selected,
}: channelSpecs): TemplateResult => {
  const label: playbackLabel = samples ? 'Samples' : 'Player';
  const selectedClass = selected ? 'selected' : '';
  return html`
    <button @click=${() => onClick()} class="ia ${selectedClass}">
      ${iaLabel(label)}
    </button>
  `;
};

export const continuousPlayButton = ({ onClick, selected }: channelSpecs) => {
  const selectedClass = selected ? 'selected' : '';
  return html`<button @click=${() => onClick()} class="ia-c ${selectedClass}">
    ${iaContinuousLabel}
  </button>`;
};

export const spotifyButton = ({ onClick, selected }: channelSpecs) => {
  const selectedClass = selected ? 'selected' : '';
  return html`<button @click=${() => onClick()} class="sp ${selectedClass}">
    ${spotifyLabel}
  </button>`;
};

export const webampLink = ({ onClick, href, selected }: channelSpecs) => {
  const selectedClass = selected ? 'selected' : '';
  const fullLink = `${href}?webamp=1`;
  return html`
    <a href=${fullLink} @click=${() =>
    onClick()} class="wa ${selectedClass}">${webampLabel}</button>
  `;
};

export const youtubeButton = ({ onClick, selected }: channelSpecs) => {
  const selectedClass = selected ? 'selected' : '';
  return html`<button @click=${() => onClick()} class="yt ${selectedClass}">
    ${youtubeLabel}
  </button>`;
};
