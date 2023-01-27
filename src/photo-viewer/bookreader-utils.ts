/* eslint-disable no-restricted-properties */
/* eslint-disable prefer-exponentiation-operator */
import type { BookManifest, BookReader } from './interfaces-types';

function bookreaderDefaultOptions(): Object {
  return {
    // "ppi": "600",
    el: '#BookReader',
    showToolbar: false,
    onePage: { autofit: 'height' }, // options: auto, width, height
    enableFSLogoShortcut: true,
    enableBookmarks: false,
    enablePageResume: false,
    enableTtsPlugin: false,
    enableUrlPlugin: false,
    defaults: 'mode/1up',
    enableSearch: true,
    searchInsideUrl: '/fulltext/inside.php',
    initialSearchTerm: null,
    imagesBaseURL: '/bookreader/BookReader/images/',
    defaultStartLeaf: 0,
    titleLeaf: 0,
    controls: {
      twoPage: { visible: false },
      viewmode: { visible: false },
    },
    bookType: 'linerNotes', // bookType: linerNotes, book
  };
}

/**
 * Loads BookReader Core optimized for liner notes
 */
export function loadBookReader(linerNotesManifest: BookManifest): BookReader {
  // fetch manifest
  const brOptions = linerNotesManifest?.brOptions;
  // core BR must be already loaded
  const fullOptions = {
    ...brOptions,
    ...bookreaderDefaultOptions(),
  };

  const bookreader = new (window as any).BookReader(fullOptions) as BookReader;

  const originalGetPageURI = (window as any).BookReader.prototype.getPageURI;
  /**
   * Needed bypass to generate Image URL with scale factor.
   * We must eliminate sooner than later to allow BookReader full image fetching control
   * @param {Number} index - page index
   * @param {Number} reduce - image size scale factor
   * @param {Number} rotate - degrees of rotation
   */
  bookreader.getPageURI = (
    index: number,
    reduce: number = 1,
    rotate: number = 0
  ) => {
    // IA only supports power of 2 reduces
    const brReduce = Math.pow(2, Math.floor(Math.log2(Math.max(1, reduce))));
    let uri = originalGetPageURI.call(bookreader, index, brReduce, rotate);
    uri += uri.indexOf('?') > -1 ? '&' : '?';
    uri = `${uri}scale=${brReduce}&rotate=${rotate}`;
    return uri;
  };

  (window as any).br = bookreader as BookReader;

  const isRestricted = (linerNotesManifest?.data as any)?.isRestricted;

  window.dispatchEvent(
    new CustomEvent('contextmenu', { detail: { isRestricted } })
  );

  return bookreader;
}
