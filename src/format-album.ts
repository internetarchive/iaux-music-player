/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
import {
  File,
  Metadata,
  MetadataResponse,
  StringField,
} from '@internetarchive/search-service';

/*
Sort audio tracks & group their derivatives;

- original audio (~FLAC)
  - derived (full) MP3s
  - derived (sample) MP3s
  - youtube id
  - spotify id
  - spectrogram

LPs
- derived segmented tracks
  - derived (sample) MP3s
  - spectrogram
  - youtube id
  - spotify id
*/
interface Spectrogram extends File {
  original: string;
  name: string;
  source: string;
  format: 'Spectrogram';
}

interface TrackDetails {
  primary: Track;
  spectrogram: Spectrogram;
  related: File[];
  sampleMp3?: Track;
  fullMp3?: Track;
}

interface PlaylistSource {
  file: File['name'];
  type: string;
  height: string;
  width: string;
}

interface PlaylistTrack {
  title: string;
  orig: File['name'];
  image: File['name'];
  duation: number;
  sources: PlaylistSource[];
}

export class Track extends File {
  playlistTrack?: PlaylistTrack;

  baseHost: string;

  isSegmented: boolean = false;

  private: boolean = false;

  spectrogram?: Spectrogram;

  sampleMp3?: Track;

  fullMp3?: Track;

  relatedFiles: File[] = [];

  constructor(
    file: File,
    playlistTrack: PlaylistTrack | undefined,
    baseHost: string
  ) {
    super(file);

    this.playlistTrack = playlistTrack;
    this.private = this.rawValue.private || false;
    this.baseHost = baseHost;
  }

  get url(): string {
    return `https://${this.baseHost}/${this.name}`;
  }

  override get title(): string {
    return this.playlistTrack?.title || this.name;
  }

  get youtubeId(): string {
    return this.externalIds.find((e: string) => e.match(/youtube/gi)) || '';
  }

  get spotifyId(): string {
    return this.externalIds.find((e: string) => e.match(/spotify/gi)) || '';
  }

  get externalIds(): string[] {
    return Array.isArray(this.external_identifier)
      ? this.external_identifier
      : [this.external_identifier || ''];
  }
}

export class Album {
  metadata: Metadata;

  tracks: Track[] = [];

  tracklist: PlaylistTrack[] = [];

  images: File[] = [];

  linerNotes: File[] = [];

  creator: StringField | string = '';

  tracksAreSegmented: boolean = false;

  itemMD: MetadataResponse;

  baseHost: string = 'archive.org';

  constructor(item: Record<string, any>, tracklist: PlaylistTrack[]) {
    this.itemMD = new MetadataResponse(item);
    this.metadata = this.itemMD.metadata;
    this.creator = this.albumCreator(this.metadata);
    this.filterFiles(item.files as File[]);
    this.tracklist = tracklist || [];

    this.groupTrackInfo();
  }

  get spotifyTracks(): Track[] {
    return this.tracks.filter((tr: Track) => !!tr.spotifyId);
  }

  get youtubeTracks(): Track[] {
    return this.tracks.find(
      (tr: Track) => !!tr.youtubeId
    ) as unknown as Track[];
  }

  isValidAudioFile(trackName: string = ''): boolean {
    return !!trackName.match(
      /(mp3|ogg|flac|m4a|wma|aiff|aac|aa|ra|ram|shn|wav|wave|opus)$/g
    );
  }

  isValidImageFile(imageName: string = ''): boolean {
    return !!imageName.match(/(png|jpg|jpeg)$/gi);
  }

  isValidSegmentFile(fileOrigin: string = ''): boolean {
    return !!fileOrigin.match(/_segments.(json|xml)$/gi);
  }

  isSpectrogram(fileName: string = ''): boolean {
    return !!fileName.match(/spectrogram/gi);
  }

  isSampleMP3(fileName: string = ''): boolean {
    return !!fileName.match(/_sample\.mp3$/gi);
  }

  hasScannedLinerNotes(fileName: string = ''): boolean {
    return !!fileName.match(/_jp2.(zip|tar)/gi);
  }

  albumCreator(md: Metadata): StringField | string {
    if (md.creator) {
      return md.creator;
    }
    if (md.rawMetadata?.artist) {
      return md.rawMetadata?.artist;
    }
    return '';
  }

  groupTrackInfo(): void {
    // return a.name.localeCompare(b.name);
  }

  tracklistEntry(file: File): PlaylistTrack | undefined {
    return this.tracklist.find(tr => {
      if (file.original) {
        // segmented track
        return tr.orig === file.original;
      }
      // original audio track
      return tr.orig === file.name;
    });
  }

  /**
   * Fills sorted track list properties.
   */
  filterFiles(files: File[]) {
    const images: File[] = [];
    const topLevelTracks = {} as Record<string, TrackDetails>;

    files.forEach((f: File): void => {
      /* pre-checks before discarding non-audio/image files */

      if (this.isValidSegmentFile(f.name)) {
        // check for segmentation - a sign for LPs, 78s
        this.tracksAreSegmented = true;
      }

      if (
        f.original &&
        this.isValidAudioFile(f.original) &&
        !topLevelTracks[f.original]
      ) {
        // if no track bucket, let's start one
        topLevelTracks[f.original] = {
          primary: undefined,
          spectrogram: undefined,
          related: [],
          sampleMp3: undefined,
          fullMp3: undefined,
        } as unknown as TrackDetails;
      }

      if (this.hasScannedLinerNotes(f.name)) {
        this.linerNotes.push(f);
      }

      if (this.isValidImageFile(f.name)) {
        // grab spectorgrams, they are always derivatives
        // so they will always have an `original` field
        if (this.isSpectrogram(f.name) && f.original) {
          topLevelTracks[f.original].spectrogram = f as Spectrogram;
        } else {
          // find all album images
          images.push(f);
        }
        return;
      }

      if (
        f.original &&
        this.isValidAudioFile(f.original) &&
        !this.isValidAudioFile(f.name)
      ) {
        // group related, non audio files
        topLevelTracks[f.original].related.push(f);
        return;
      }

      if (!this.isValidAudioFile(f.name) || !this.isValidImageFile(f.name)) {
        // discard non-audio/image files
        return;
      }

      const tracklistEntry = this.tracklistEntry(f);
      /** All audio from here */
      const track = new Track(f, tracklistEntry, this.baseHost);

      // Identify top level track and set it
      const segmentedTrack =
        this.isValidSegmentFile(track.original) &&
        this.isValidAudioFile(track.name);

      const primaryTrack = track.source === 'original';

      if (primaryTrack || segmentedTrack) {
        // pin top track file
        topLevelTracks[track.name].primary = track;
        return;
      }

      if (track.name.match(/_sample\.mp3$/) && track.original) {
        // get samples
        topLevelTracks[track.original].sampleMp3 = track;
        return;
      }

      if (
        !this.isValidAudioFile(track.name) &&
        !this.isSampleMP3(track.name) &&
        this.isValidAudioFile(track.original) &&
        track.original
      ) {
        // if not sample but is mp3 & has original reference
        // that is the full MP3
        topLevelTracks[track.original].fullMp3 = track;
      }
    }); // end files walk

    const primaryTracks = Object.values(topLevelTracks);

    // let's update the original track list with enriched Tracks
    console.log('**********************************');
    console.log('primaryTracks', primaryTracks);

    this.images = images;
    console.log('****** this.images ---- ', this.images);

    this.tracklist.forEach((tr: PlaylistTrack, i) => {
      const primaryTrack = topLevelTracks[tr.orig].primary as Track;
      primaryTrack.playlistTrack = tr;
      primaryTrack.spectrogram = topLevelTracks[tr.orig].spectrogram;
      primaryTrack.relatedFiles = topLevelTracks[tr.orig].related;
      primaryTrack.sampleMp3 = topLevelTracks[tr.orig].sampleMp3;
      primaryTrack.fullMp3 = topLevelTracks[tr.orig].fullMp3;

      this.tracks[i] = primaryTrack;
      console.log('#####');
      console.log('primaryTrack', primaryTrack);
      console.log('this.tracks', this.tracks.length, this.tracks);
    });
  }
}
