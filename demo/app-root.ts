/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-globals */
import { html, css, LitElement, TemplateResult, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { MetadataResponse } from '@internetarchive/search-service';
import { channelTypes } from '../src/channel-selector/channels';
import '../src/channel-selector/channel-selector';
import '../src/players/spotify-player';
import '../src/players/youtube-player';
import { Album } from '../src/models/album';
import { PlaylistTrack } from '../src/models/track';

const albumList = [
  {
    id: 'cd_first-life_various-artists',
    desc: 'CD - with no Liner notes, yes YT, yes SP, no Webamp',
  },
  {
    id: 'lp_the-dark-side-of-the-moon_pink-floyd',
    desc: 'LP - Pink Floyd Dark Side of the Moon',
  },
  {
    id: 'cd_the-dark-side-of-the-moon_pink-floyd',
    desc: 'CD - Pink Floyd Dark Side of the Moon',
  },
  {
    id: 'capitol-15045-b-cigarettes-whiskey-and-wild-wild-women',
    desc: '78 - w/o jp2 (only 1 item image)',
  },
  {
    id: 'bestofdollyparto00part',
    desc: 'LP - older',
  },
  {
    id: 'lp_dancing-tonight_freddy-martin-and-his-orchestra',
    desc: 'LP - current, ~ 2020',
  },
  {
    id: 'cd_beethoven-complete-works-for-string-trio_the-adaskin-string-trio',
    desc: 'what_cd',
  },
  {
    id: 'wcd_message-in-a-box-th_the-police_flac_lossless_807968',
    desc: 'Irregular Photo - (portrait)',
  },
  {
    id: 'lak-JC_Burris-James_Booker',
    desc: 'No photo + long track list',
  },
  {
    id: 'wcd_various-artiststhe-best-of-country-music_flac_lossless_29887623',
    desc: 'Complilation, various artists',
  },
  {
    id: 'lp_emperor-concerto_ludwig-van-beethoven-arthur-rubinstein-bos',
    desc: 'Track names, multiple but same as album artist (should be omitted)',
  },
  {
    id: 'illegal-art',
    desc: '3 column track list wide view pagination check',
  },
  {
    id: 'wcd_borghild_die-warzau_mp3_320_1648819',
    desc: 'Track time display, 60 seconds adds another minute. should display as 10:00',
  },
  {
    id: 'cd_aaliyah_aaliyah-static-from-playa-timbaland',
    desc: 'Has 3rd party "Full Album". Clicking on Full Album should highlight full album',
  },
];
@customElement('app-root')
export class AppRoot extends LitElement {
  @property({ type: String, reflect: true }) viewToShow: 'components' | 'data' =
    'data';

  @property({ type: String }) selectedByDropdown: channelTypes =
    channelTypes.beta;

  @property({ type: String }) errorMsg: string = '';

  @property({ type: String }) selectedByDropdownOnload: channelTypes | '' = '';

  @property({ type: String }) selectedByRadio: channelTypes = channelTypes.beta;

  @property({ type: String }) selectedByRadioOnload: channelTypes | '' = '';

  @property({ type: String }) albumId: string = '';

  @property({ type: Object, attribute: false }) albumMd: Record<
    string,
    any
  > | null = null;

  @property({ type: Object, attribute: false }) albumPlaylist: Record<
    string,
    any
  > | null = null;

  @property({ type: Object, attribute: false }) album: Album | null = null;

  @query('input#md-search') input!: HTMLInputElement;

  override updated(changed: Record<string, any>): void {
    if (changed.has('viewToShow')) {
      document
        .querySelector('body')
        ?.removeAttribute(changed.get('viewToShow'));
      document.querySelector('body')?.setAttribute(this.viewToShow, '');
    }

    if (changed.has('albumId') && this.albumId) {
      this.albumInfo();
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

          ${this.viewToShow === 'data'
            ? html`<div>
                <form @submit=${(e: Event) => this.formInputSubmit(e)}>
                  <label
                    ><span>Item ID:</span
                    ><input
                      id="md-search"
                      placeholder=""
                      .value=${this.albumId}
                  /></label>
                </form>
                <button
                  @click=${() => {
                    this.albumId = '';
                    this.album = null;
                    this.albumMd = null;
                    this.albumPlaylist = null;
                    this.errorMsg = '';
                  }}
                >
                  CLEAR
                </button>
              </div>`
            : nothing}
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

  async albumInfo(): Promise<void> {
    this.errorMsg = '';
    try {
      const md = await fetch(
        `https://archive.org/metadata/${this.albumId}`
      ).then(res => res.json());
      const playlist = await fetch(
        `https://archive.org/services/playlist/${this.albumId}`
      ).then(res => res.json());
      this.albumPlaylist = playlist;
      this.albumMd = new MetadataResponse(md);
      this.album = new Album(
        this.albumMd as MetadataResponse,
        this.albumPlaylist as PlaylistTrack[]
      );
      (window as any).Album = this.album;
    } catch (e: any) {
      this.errorMsg = e.message;
    }
  }

  formInputSubmit(e: Event): void {
    e.preventDefault();
    this.albumId = this.input.value;
  }

  get albumStats(): TemplateResult | typeof nothing {
    if (!this.album) {
      return nothing;
    }

    const spTrackNums = (
      this.album.spotifyTracks.reduce((acc: (number | string)[], tr) => {
        acc.push(tr?.track || 'n/a');
        return acc;
      }, []) as number[]
    ).join(', ');
    const ytTrackNums = (
      this.album.youtubeTracks.reduce((acc: (number | string)[], tr) => {
        acc.push(tr?.track || 'n/a');
        return acc;
      }, []) as number[]
    ).join(', ');

    return html`
      <section id="album-stats">
        <h2>Stats</h2>
        <dl>
          <dr
            ><dt>
              <img
                class="album-image"
                src=${this.album.albumImage}
                alt="item img"
              />
            </dt>
            <dd>Image: ${this.album.albumImage}</dd></dr
          >
          <dr
            ><dt>Title</dt>
            <dd>${this.album.title}</dd></dr
          >
          <dr
            ><dt>Creator</dt>
            <dd>${this.album.creator}</dd></dr
          >
          <dr
            ><dt>Liner Notes?</dt>
            <dd>${this.album.linerNotes.length}</dd></dr
          >
          <dr
            ><dt>Images?</dt>
            <dd>${this.album.images.length}</dd></dr
          >
          <dr
            ><dt>/services/playlist Count</dt>
            <dd>${this.album.rawPlaylistTracks.length}</dd></dr
          >
          <dr
            ><dt>Tracks Count Found</dt>
            <dd>${this.album.tracks.length}</dd></dr
          >
          <dr
            ><dt>YT Track #</dt>
            <dd>${this.album.youtubeTracks.length} => ${ytTrackNums}</dd></dr
          >
          <dr
            ><dt>Has YT Album?</dt>
            <dd>${this.album.youtubeId ? this.album.youtubeId : 'NO'}</dd></dr
          >
          <dr
            ><dt>Spotify Track</dt>
            <dd>${this.album.spotifyTracks.length} => ${spTrackNums}</dd></dr
          >
          <dr
            ><dt>Has Spotify Album?</dt>
            <dd>${this.album.spotifyId ? this.album.spotifyId : 'NO'}</dd></dr
          >
        </dl>
      </section>
    `;
  }

  get demoClicks(): TemplateResult {
    return html`
      <section id="demo-clicks">
        ${albumList.map((alb: Record<string, any>) => {
          const isSelected = this.albumId === alb.id;
          return html`
            <div class=${`demo ${isSelected ? 'selected' : ''}`}>
              <button class="demo-go" @click=${() => (this.albumId = alb.id)}>
                GO
              </button>
              <p><b>ID: ${alb.id}</b></p>
              <p>${alb.desc}</p>
            </div>
          `;
        })}
      </section>
    `;
  }

  get dataView(): TemplateResult {
    return html`
      <section id="data">
        <div></div>
        ${this.demoClicks}
        ${this.errorMsg
          ? html`<h2 id="error">ERROR: ${this.errorMsg}</h2>`
          : nothing}

        <h2>
          Info for:
          <a
            _target="blank"
            href=${`https:/archive.org/details/${this.albumId}`}
            >${this.albumId}</a
          >
        </h2>

        ${this.albumStats}
        <div>
          <iframe
            src=${`https://archive.org/details/${this.albumId}`}
            title="ia details page"
          ></iframe>
        </div>
        <div>
          <h3>Metadata</h3>
          <pre>${JSON.stringify(this.albumPlaylist)}</pre>
        </div>
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
      font-size: 16px;
    }

    button,
    input {
      height: 40px;
      font-size: 20px;
    }

    form {
      display: inline-block;
      margin: 10px auto;
    }

    input {
      min-width: 250px;
      margin-left: 10px;
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

    iframe {
      display: block;
      border: 1px solid pink;
      min-height: 500px;
      width: 100%;
    }

    dl dr {
      display: flex;
      font-size: 20px;
      border-bottom: 1px solid;
      padding: 5px;
      align-items: center;
    }

    dl dr dt {
      width: 200px;
    }

    #error {
      background-color: red;
      color: white;
    }

    #demo-clicks {
      border: 3px solid green;
      padding: 5px;
      max-height: 200px;
      overflow-y: auto;
    }

    .demo {
      border: 1px solid rebeccapurple;
      display: inline-block;
      height: 200px;
      width: 200px;
      padding: 5px;
      overflow: auto;
      margin: 5px;
    }

    .demo.selected {
      background-color: lavender;
    }

    .demo-go {
      display: block;
      width: 100%;
    }

    .album-image {
      height: 200px;
      border: 1px solid;
    }
  `;
}
