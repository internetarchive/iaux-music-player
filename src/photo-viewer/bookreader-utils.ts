/* eslint-disable no-restricted-properties */
/* eslint-disable prefer-exponentiation-operator */
/* eslint-disable no-console */
import { BookReaderLeafInfo } from '../interfaces/bookreader-interface';
import type { BookManifest, BookReader } from './interfaces-types';

function bookreaderDefaultOptions(): Object {
  return {
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
  // debugger;
  // eslint-disable-next-line prefer-destructuring
  const brOptions = linerNotesManifest.brOptions;
  // core BR must be already loaded
  const fullOptions = {
    ...bookreaderDefaultOptions(),
    ...brOptions,
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

  const isRestricted = linerNotesManifest?.data?.isRestricted;

  window.dispatchEvent(
    new CustomEvent('contextmenu', { detail: { isRestricted } })
  );

  return bookreader;
}

async function fetchImageInfo(src: string) {
  const x = await new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
  return x;
}

async function getImageData(
  formattedImgInfo: Record<any, any>[]
): Promise<Record<any, any>[]> {
  const updatedImageInfo: Record<any, any>[] = [];

  await Promise.all(
    formattedImgInfo.map(async imgInfo => {
      let imgEl;
      try {
        imgEl = (await fetchImageInfo(imgInfo.uri)) as HTMLImageElement;
      } catch (e) {
        imgEl = new Image(300, 300);
      }
      console.log(
        '^^^^^^^^^^^^^^ FETCH IMAGE ~~~~~~~',
        imgEl,
        imgEl.height,
        imgEl.width
      );
      const picPosition = formattedImgInfo.indexOf(imgInfo);
      updatedImageInfo[picPosition] = {
        ...imgInfo,
        width: imgEl.width,
        height: imgEl.height,
      };
    })
  );

  return updatedImageInfo;
}

export async function generateBookReaderManfest({
  images = [],
  itemIdentifier = '',
  itemTitle = '',
  baseHost = 'archive.org',
}): Promise<Record<any, any>> {
  const metadata =
    (
      (await fetch(
        `https://${baseHost}/metadata/${itemIdentifier}/metadata`
      ).then(res => res.json())) as any
    ).result || {};

  const formatted = images.map(
    (imgPath: string, index: number): Record<any, any> => {
      const pageSide = index % 2 === 1 ? 'L' : 'R';
      console.log('imgPath', imgPath);
      const uri = `https://${baseHost}/download/${itemIdentifier}${imgPath}`;
      return {
        uri,
        leafNum: index,
        pageType: 'Normal',
        pageSide,
      };
    }
  );

  const formattedWithImageData = (await getImageData(
    formatted
  )) as BookReaderLeafInfo[];
  const spread: BookReaderLeafInfo[][] = [];
  formattedWithImageData.forEach((page, index) => {
    if (index === 0) {
      spread.push([page]);
      return;
    }

    if (index % 2 === 1) {
      spread.push([page]);
      return;
    }

    if (index % 2 === 0) {
      spread[spread.length - 1].push(page);
    }
  });

  const brOptions = {
    bookId: itemIdentifier,
    bookPath: `/download/${itemIdentifier}`,
    bookTitle: itemTitle,
    defaults: 'mode/1up',
    dfaultStartLeaf: 0,
    ppi: 200,
    data: spread,
  };
  const fullOptions = {
    ...brOptions,
    ...bookreaderDefaultOptions(),
    ...{ enableSearch: false },
    plugins: {
      textSelection: { enabled: false },
    },
  };

  const data = {
    streamOnly: false,
    isRestricted: false,
    id: itemIdentifier,
    subPrefix: itemIdentifier,
    bookUrl: `/details/${itemIdentifier}`,
  };
  const manifest = {
    data,
    brOptions: fullOptions,
    metadata,
  };
  console.log('**** MANIFEST _---', manifest, fullOptions);
  return manifest;
}
