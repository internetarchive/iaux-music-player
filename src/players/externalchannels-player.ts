import { LitElement, html, TemplateResult, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { Track } from '../models/track';
import { Album } from '../models/album';
import type { YouTubePlayer } from './youtube-player';
import './youtube-player';
import type { SpotifyPlayer } from './spotify-player';
import './spotify-player';
import { channelTypes } from '../channel-selector/channels';

@customElement('externalchannels-player')
export class ExternalChannelsPlayer extends LitElement {
  @property({ type: String, attribute: true, reflect: true }) selectedChannel:
    | channelTypes
    | '' = '';

  @property({ type: Object }) playerApi: any = undefined;

  @property({ type: Object }) album?: Album;

  @property({ type: Object }) selectedTrack?: Track;

  @state()
  currentTrackNum?: number;

  @query('spotify-player') spotifyPlayer?: SpotifyPlayer;

  @query('youtube-player') youtubePlayer?: YouTubePlayer;

  updated(changed: Map<string, any>) {
    if (changed.has('album') && this.album) {
      this.dispatchAlbumInfo();
    }

    if (changed.has('selectedChannel') && this.selectedChannel && this.album) {
      this.updateToSelectedChannel();
    }

    if (changed.has('selectedTrack') && this.selectedTrack) {
      this.dispatchSelectedTrack();
    }
  }

  dispatchSelectedTrack(): void {
    console.log('externalchannels-player: SELECTED TRACK', this.selectedTrack);
    this.dispatchEvent(
      new CustomEvent('externalChannelsSelectedTrack', {
        detail: {
          track: this.selectedTrack,
        },
      })
    );
  }

  dispatchAlbumInfo(): void {
    console.log('externalchannels-player: ALBUM INFO', this.album);
    this.dispatchEvent(
      new CustomEvent('externalChannelsPlayerLoaded', {
        detail: {
          album: this.album,
          spotifyTracks: this.album?.spotifyTracks || [],
          youtubeTracks: this.album?.youtubeTracks || [],
        },
      })
    );
  }

  onTracklistClickCallback(iaTrackNum: number): void {
    this.currentTrackNum = iaTrackNum + 1;
    let selectedTrack = this.album?.tracks.find(
      tr => tr.track === this.currentTrackNum
    );
    if (this.selectedChannel === channelTypes.spotify) {
      const spotifyTrack = this.album?.spotifyTracks.find(
        tr => tr.track === this.currentTrackNum
      );
      selectedTrack = spotifyTrack ?? this.album?.spotifyTracks[0];
    } else if (this.selectedChannel === channelTypes.youtube) {
      const ytTrack = this.album?.youtubeTracks.find(
        tr => tr.track === this.currentTrackNum
      );
      selectedTrack = ytTrack ?? this.album?.youtubeTracks[0];
    }

    this.selectedTrack = selectedTrack;
    console.log('*** onTracklistClickCallback ** ', {
      selectedTrack,
      iaTrackNum,
      currentTrackNum: this.currentTrackNum,
    });
  }

  updateToSelectedChannel(): void {
    if (this.selectedChannel === 'youtube') {
      const youtubeTracks = this.album!.youtubeTracks || [];
      const iaYtTracklist: number[] = [];
      console.log('youtubeTracks', youtubeTracks);
      if (youtubeTracks.length) {
        // set tracklist
        const ytTrackNums = (
          youtubeTracks.reduce((acc: (number | string)[], tr) => {
            const trackNum = Number.isInteger(tr!.track)
              ? `${tr!.track}`
              : 'n/a';
            acc.push(trackNum);
            // side effect while we walk list
            if (trackNum !== 'n/a') {
              const iaTrackNum = Number(trackNum) - 1;
              iaYtTracklist.push(iaTrackNum);
            }
            return acc;
          }, []) as number[]
        ).join(', ');
        console.log('ytTrackNums', { ytTrackNums, iaYtTracklist });
        this.playerApi?.headless(iaYtTracklist, (iaTrackNumSelected: number) =>
          this.onTracklistClickCallback(iaTrackNumSelected)
        );
      }
    } else if (this.selectedChannel === 'spotify') {
      const spotifyTracks = this.album?.spotifyTracks || [];
      const iaSpTracklist: number[] = [];
      console.log('spotifyTracks', spotifyTracks);
      if (spotifyTracks.length) {
        const spTrackNums = (
          this.album?.spotifyTracks.reduce((acc: (number | string)[], tr) => {
            const trackNum = Number.isInteger(tr!.track)
              ? `${tr!.track}`
              : 'n/a';
            acc.push(trackNum);
            // side effect while we walk list
            if (trackNum !== 'n/a') {
              const iaTrackNum = Number(trackNum) - 1;
              iaSpTracklist.push(iaTrackNum);
            }
            return acc;
          }, []) as number[]
        ).join(', ');
        console.log('spTrackNums ------', { spTrackNums, iaSpTracklist });
        this.playerApi?.headless(iaSpTracklist, (iaTrackNumSelected: number) =>
          this.onTracklistClickCallback(iaTrackNumSelected)
        );
      }
    } else {
      (this.playerApi as any)?.headless();
    }
  }

  override render(): TemplateResult {
    const isValidExteralChannel =
      this.selectedChannel === 'youtube' || this.selectedChannel === 'spotify';
    if (!isValidExteralChannel) {
      return nothing as unknown as TemplateResult;
    }

    if (this.selectedChannel === 'spotify') {
      const trackFound = this.album?.spotifyTracks.find(
        tr => tr?.track === this.selectedTrack?.track
      );
      if (trackFound) {
        return html`
          <spotify-player .iaUrn=${trackFound?.spotifyId}></spotify-player>
        `;
      }
    } else if (this.selectedChannel === 'youtube') {
      const trackFound = this.album?.youtubeTracks.find(
        tr => tr.track === this.selectedTrack?.track
      );
      console.log('~~~~ trackFound YT ID', trackFound?.youtubeId, trackFound);
      if (trackFound) {
        return html`
          <youtube-player .iaUrn=${trackFound.youtubeId}></youtube-player>
        `;
      }
    }

    return nothing as unknown as TemplateResult;
  }
}
