/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
import {
  File,
  MetadataResponse,
  StringField,
} from '@internetarchive/search-service';
import { PlaylistTrack, Spectrogram, Track, TrackDetails } from './track';

/**
 * An Album on the Internet Archive
 *
 * Takes a MetadataResponse & PlaylistTrack[]
 * to create an Album
 * */
export class Album {
  tracks: PlaylistTrack[] = [];

  images: File[] = [];

  linerNotes: File[] = [];

  tracksAreSegmented: boolean = false;

  baseHost: string = 'archive.org';

  relatedFiles: File[] = [];

  rawPlaylistTracks: PlaylistTrack[] = [];

  item: MetadataResponse;

  constructor(item: Record<any, any>, tracks: PlaylistTrack[]) {
    this.item = new MetadataResponse(item);
    this.rawPlaylistTracks = tracks;
    this.tracks = tracks;
    this.filterFiles(this.item.files as File[]);
  }

  get title(): string {
    return (this.item.metadata?.title?.values.join('; ') as string) || '';
  }

  get creator(): StringField | string {
    if (this.item.metadata?.creator?.values) {
      return this.item.metadata?.creator?.values.join('; ');
    }

    if (this.item.metadata.rawMetadata?.artist) {
      return this.item.metadata.rawMetadata?.artist;
    }
    return '';
  }

  get youtubeId(): string {
    return (
      (this.externalIds as string[]).find((e: string) =>
        e.match(/youtube/gi)
      ) || ''
    );
  }

  get spotifyId(): string {
    return (
      (this.externalIds as string[]).find((e: string) =>
        e.match(/spotify/gi)
      ) || ''
    );
  }

  get externalIds(): string[] {
    if (!this.item.metadata.rawMetadata) {
      return [''];
    }

    const exId = this.item.metadata['external-identifier'] as StringField;
    return exId?.values?.length ? exId.values : [exId?.value || ''];
  }

  get youtubeTracks(): Track[] {
    const availableTracks = this.tracks.filter((tr: Track) => tr.youtubeId);

    if (this.albumTrackOption('yt') !== undefined) {
      availableTracks.unshift(this.albumTrackOption('yt') as PlaylistTrack);
    }
    return availableTracks;
  }

  get spotifyTracks(): Track[] {
    const availableTracks = this.tracks.filter((tr: Track) => tr.spotifyId);

    if (this.albumTrackOption('sp') !== undefined) {
      availableTracks.unshift(this.albumTrackOption('sp') as PlaylistTrack);
    }
    return availableTracks;
  }

  get albumImage(): string {
    // #1 - default Item Image
    const itemImage = this.images.find(
      (img: File) => img.format === 'Item Image'
    );
    const urlBase = `https://${this.baseHost}/download/${this.item.metadata.identifier}/`;
    if (itemImage) {
      return `${urlBase}${itemImage.name}`;
    }

    // #2 - originally uploaded image
    const originalImages = this.images.find((img: File) => {
      const invalidFormats = ['Item Image', 'JPEG Thumb'];
      return img.source === 'original' && !invalidFormats.includes(img.format);
    });
    if (originalImages) {
      return `${urlBase}${originalImages.name}`;
    }

    // #3 - thumbnail
    return `${urlBase}__ia_thumb.jpg`;
  }

  albumTrackOption(playerType: 'yt' | 'sp'): Track | undefined {
    const base = {
      title: 'Full Album',
      orig: '',
      image: '',
      duration: '-- : --',
      track: 0,
      iaTrackNum: -1,
      sources: [],
    };

    if (playerType === 'yt' && this.youtubeId) {
      return { ...base, youtubeId: this.youtubeId } as unknown as Track;
    }

    if (playerType === 'sp' && this.spotifyId) {
      return { ...base, spotifyId: this.spotifyId } as unknown as Track;
    }

    return undefined;
  }

  isAlbumRelatedFile(file: File): boolean {
    return (
      !!file.name.match(/.(ffp|md5)$/g)?.length &&
      !!file.original?.length &&
      file.source === 'derivative'
    );
  }

  isValidAudioFile(trackName: string = ''): boolean {
    return !!trackName.match(
      /(mp3|ogg|flac|m4a|wma|aiff|aac|aa|ra|ram|shn|wav|wave|opus)$/gi
    )?.length;
  }

  isValidImageFile(imageName: string = ''): boolean {
    return !!imageName.match(/.(png|jpg|jpeg)$/gi)?.length;
  }

  isValidImageFileFormat(imageFormat: string = ''): boolean {
    return !!imageFormat.match(/(png|jpg|jpeg)/gi)?.length;
  }

  isValidSegmentFile(fileOrigin: string = ''): boolean {
    return !!fileOrigin.match(/_segments.(json|xml)$/gi)?.length;
  }

  isSpectrogram(fileName: string = ''): boolean {
    return !!fileName.match(/spectrogram/gi)?.length;
  }

  isSampleMP3(fileName: string = ''): boolean {
    return !!fileName.match(/_sample\.mp3$/gi)?.length;
  }

  hasScannedLinerNotes(fileName: string = ''): boolean {
    return !!fileName.match(/_jp2.(zip|tar)/gi)?.length;
  }

  // tracksEntry(file: File): PlaylistTrack | undefined {
  //   return this.tracks.find(tr => {
  //     if (file.original) {
  //       // segmented track
  //       return tr.orig === file.original;
  //     }
  //     // original audio track
  //     return tr.orig === file.name;
  //   });
  // }

  /**
   * Fills sorted track list properties.
   * During `MetadataResponse.files` walk, we identify TrackDetails
   * to enrich track information received from `PlaylistTrack[]`
   */
  filterFiles(files: File[]): void {
    const images: File[] = [];
    const topLevelTracks = {} as Record<string, TrackDetails>;

    files.forEach((file: File): void => {
      /* pre-checks before discarding non-audio/image files */
      const f = file.rawValue as File;
      const isAudioFile = this.isValidAudioFile(f.name);

      if (this.isAlbumRelatedFile(f)) {
        this.relatedFiles.push(f);
        return;
      }

      if (this.isValidSegmentFile(f.name)) {
        // check for segmentation - a sign for LPs, 78s
        this.tracksAreSegmented = true;
        this.relatedFiles.push(f);

        // set pointer
        if (
          f.original &&
          this.isValidAudioFile(f.name) &&
          !topLevelTracks[f.original]
        ) {
          topLevelTracks[f.original] = {
            primary: undefined,
            spectrogram: undefined,
            related: [],
            sampleMp3: undefined,
            fullMp3: undefined,
          } as unknown as TrackDetails;
        }
      }

      if (f.source === 'original' && !topLevelTracks[f.name] && isAudioFile) {
        topLevelTracks[f.name] = {
          primary: undefined,
          spectrogram: undefined,
          related: [],
          sampleMp3: undefined,
          fullMp3: undefined,
        } as unknown as TrackDetails;
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
        if (f.original && this.isValidAudioFile(f.original)) {
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

      if (
        !this.isValidAudioFile(f.name) ||
        (!this.isValidImageFile(f.name) && !this.isValidAudioFile(f.name))
      ) {
        // discard non-audio/image files
        return;
      }

      /** All audio from here */

      // Identify top level track and set it
      const segmentedTrack =
        this.isValidSegmentFile(f.original) && this.isValidAudioFile(f.name);
      const primaryTrack =
        f.source === 'original' && this.isValidAudioFile(f.name);

      if (primaryTrack || segmentedTrack) {
        if (!topLevelTracks[f.name]) {
          topLevelTracks[f.name] = {
            primary: undefined,
            spectrogram: undefined,
            related: [],
            sampleMp3: undefined,
            fullMp3: undefined,
          } as unknown as TrackDetails;
        }
        // pin top track file
        topLevelTracks[f.name].primary = f;
        return;
      }

      if (f.name.match(/_sample\.mp3$/)?.length && f.original) {
        // get samples
        topLevelTracks[f.original].sampleMp3 = new File(f);
        return;
      }

      if (
        this.isValidAudioFile(f.name) &&
        !this.isSampleMP3(f.name) &&
        this.isValidAudioFile(f.original) &&
        f.original
      ) {
        // if not sample but is mp3 & has original reference
        // that is the full MP3
        if (f.name.match(/.mp3$/)?.length) {
          topLevelTracks[f.original].fullMp3 = f;
        } else {
          topLevelTracks[f.original].related.push(f);
        }
      }
    }); // end files walk

    // grab images
    this.images = images;

    // grab detailed tracks
    const allTracks: PlaylistTrack[] = [];
    this.tracks.forEach((tr: PlaylistTrack, i) => {
      const primaryTrack = topLevelTracks[tr.orig].primary;

      const detailedTrackInfo = new Track(
        { ...tr, ...primaryTrack, details: topLevelTracks[tr.orig] },
        'archive.org'
      ) as PlaylistTrack;
      detailedTrackInfo.setPlaylistInfo(tr);

      allTracks[i] = detailedTrackInfo;
    });
    this.tracks = allTracks;
  }
}

/*
Noes on the two primary ways we archive audio items:

File relationships:

### Primary - Scanned CDs, Audio Uploads
1 album = N audo files, 1 song = 1 track
  - derived (full) MP3s
  - derived (sample) MP3s
  - youtube id
  - spotify id
  - spectrogram

### Segmented - Scanned LPs, Scanned 78s
Original audio is Long Play, must be segmented to retrieve tracks.
1 album file = 1 audio file => post processed to retrieve many tracks
- derived segmented tracks (MP3s)
  - derived (sample) MP3s
  - spectrogram
  - youtube id
  - spotify id
*/
