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
  samples?: boolean | null | undefined;
  href?: string | undefined;
};

type playbackLabel = 'Samples' | 'Player';

export const iaLabel = (label: playbackLabel) => html`
  <span class="channel-img"
    ><img src="../svgs/internet-archive.svg" alt="internet archive logo"
  /></span>
  <span class="channel-name">Internet Archive ${label}</span>;
`;

export const iaContinuousLabel = html`
  <span class="channel-img"
    ><img
      src="../svgs/continuous-play.svg"
      alt="internet archive continuous play logo"
  /></span>
  <span class="channel-name">Continuous Play (beta)</span>;
`;

export const spotifyLabel = html`
  <span class="channel-img"
    ><img src="../svgs/spotify.svg" alt="spotify logo"
  /></span>
  <span class="channel-name">Spotify</span>;
`;

export const webampLabel = html`
  <span class="channel-img"
    ><img src="../svgs/webamp.svg" alt="webamp logo"
  /></span>
  <span class="channel-name">Webamp</span>;
`;

export const youtubeLabel = html`
  <span class="channel-img"
    ><img src="../svgs/youtube.svg" alt="youtube logo"
  /></span>
  <span class="channel-name">Youtube</span>;
`;

/** IA <a> */
export const iaLink = ({
  samples,
  onClick,
  href,
}: channelSpecs): TemplateResult => {
  const label: playbackLabel = samples ? 'Samples' : 'Player';
  return html`
    <a href=${href} @click=${() => onClick()}>${iaLabel(label)}</button>
  `;
};

/** IA <button> */
export const iaButton = ({
  samples,
  onClick,
}: channelSpecs): TemplateResult => {
  const label: playbackLabel = samples ? 'Samples' : 'Player';
  return html` <button @click=${() => onClick()}>${iaLabel(label)}</button> `;
};

export const continuousPlayButton = ({ onClick }: channelSpecs) => html`
  <button @click=${() => onClick()}>${iaContinuousLabel}</button>
`;

export const spotifyButton = ({ onClick }: channelSpecs) => html`
  <button @click=${() => onClick()}>${spotifyLabel}</button>
`;

export const webampLink = ({ onClick, href }: channelSpecs) => {
  const fullLink = `${href}?webamp=1`;
  return html`
    <a href=${fullLink} @click=${() => onClick()}>${webampLabel}</button>
  `;
};

export const youtubeButton = ({ onClick }: channelSpecs) => html`
  <button @click=${() => onClick()}>${youtubeLabel}</button>
`;
