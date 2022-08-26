/* eslint-disable no-use-before-define */
import { File } from '@internetarchive/search-service';

/**
 * Track
 * An aggregate of related files related to 1 audio file
 * -
 */
export class Track extends File implements PlaylistTrack {
  baseHost: string;

  isSegmented: boolean = false;

  private: boolean = false;

  spectrogram?: Spectrogram;

  sampleMp3?: Track;

  fullMp3?: Track;

  details: TrackDetails | null = null;

  /** PlaylistTrack details */
  orig: string = '';

  image: string = '';

  duration: number = 0;

  sources: PlaylistSource[] = [];

  private _playlistTrack: PlaylistTrack | null = null;

  constructor(
    trackDetails: Record<string, any>,
    baseHost: string = 'archive.org'
  ) {
    super(trackDetails);

    this.details = trackDetails.details;
    this.baseHost = baseHost;
  }

  setPlaylistInfo(track: PlaylistTrack): void {
    this._playlistTrack = track;
    this.orig = track.orig;
    this.image = track.image;
    this.duration = track.duration;
    this.sources = track.sources;
  }

  get url(): string {
    return `https://${this.baseHost}/${this.name}`;
  }

  override get title(): string {
    return this._playlistTrack?.title || this?.title || this.name;
  }

  get youtubeId(): string {
    return (
      (this.externalIds as unknown as string[]).find((e: string) =>
        e.match(/youtube/gi)
      ) || ''
    );
  }

  get spotifyId(): string {
    return this.externalIds.find((e: string) => e.match(/spotify/gi)) || '';
  }

  get externalIds(): string[] {
    return Array.isArray(this.rawValue['external-identifier'])
      ? this.rawValue['external-identifier']
      : [this.rawValue['external-identifier'] || ''];
  }
}

/* Interfaces */

/**
 * track schema from endpoint: `/services/playlist/<id>`
 */
export interface PlaylistTrack extends Track {
  title: string;
  orig: File['name'];
  image: File['name'];
  duration: number;
  sources: PlaylistSource[];
}

/** file source schema frpom endpoint: `/services/playlist/<id>` */
export interface PlaylistSource {
  file: File['name'];
  type: string;
  height: string;
  width: string;
}

/** Spectrogram File schema */
export interface Spectrogram extends File {
  original: string;
  name: string;
  source: string;
  format: 'Spectrogram';
}

/** a map of Files rleated to 1 song */
export interface TrackDetails {
  /** primary song that other files are derived from */
  primary: File;
  spectrogram: Spectrogram;
  related: File[];
  sampleMp3?: File;
  fullMp3?: File;
}
