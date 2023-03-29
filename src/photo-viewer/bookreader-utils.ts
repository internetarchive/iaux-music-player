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

/*
{
  "width": 2787,
  "height": 2800,
  "uri": "https:\/\/ia800103.us.archive.org\/BookReader\/BookReaderImages.php?zip=\/29\/items\/cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera\/cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera_jp2.zip&file=cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera_jp2\/cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera_0000.jp2&id=cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera",
  "leafNum": 0,
  "pageType": "Normal",
  "pageSide": "R"
}

{
  "has_image": true,
  "carousel": {
    "/paf2023-03-11.archive-image_thumb.jpg": [
      null,
      "/paf2023-03-11.archive-image.jpg"
    ],
    "/paf2023-03-11.image01_thumb.jpg": [
      null,
      "/paf2023-03-11.image01.jpg"
    ],
    "/paf2023-03-11.image02_thumb.jpg": [
      null,
      "/paf2023-03-11.image02.jpg"
    ],
    "/paf2023-03-11.image03_thumb.jpg": [
      null,
      "/paf2023-03-11.image03.jpg"
    ],
    "/paf2023-03-11.image04_thumb.jpg": [
      null,
      "/paf2023-03-11.image04.jpg"
    ]
  },
  "image_url": "https: //ia601602.us.archive.org/26/items/paf2023-03-11.aud-mtx.sos.ford.flac24/paf2023-03-11.archive-image.jpg?cnt=0",
  "image_filenames": [
    "/paf2023-03-11.archive-image.jpg",
    "/paf2023-03-11.image01.jpg",
    "/paf2023-03-11.image02.jpg",
    "/paf2023-03-11.image03.jpg",
    "/paf2023-03-11.image04.jpg"
  ]
}


  "brOptions": {
    "bookId": "cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera",
    "bookPath": "\/29\/items\/cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera\/cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera",
    "imageFormat": "jp2",
    "server": "ia800103.us.archive.org",
    "subPrefix": "cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera",
    "zip": "\/29\/items\/cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera\/cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera_jp2.zip",
    "bookTitle": "Hanna-Barbera Cartoon Sound Fx",
    "defaults": "mode\/1up",
    "ppi": "600",
    "defaultStartLeaf": 0,
    "pageProgression": "lr",
    "vars": {
      "bookId": "cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera",
      "bookPath": "\/29\/items\/cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera\/cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera",
      "server": "ia800103.us.archive.org",
      "subPrefix": "cd_hanna-barbera-cartoon-sound-fx_william-hanna-joseph-barbera"
    },
    "plugins": {
      "textSelection": {
        "enabled": false
      }
    },
    "data": []
  },


*/

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
      const imgEl = (await fetchImageInfo(imgInfo.uri)) as HTMLImageElement;
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
  const metadata = (
    (await fetch(
      `https://${baseHost}/metadata/${itemIdentifier}/metadata`
    ).then(res => res.json())) as any
  ).result;
  console.log(
    '~~~~~ generateBookReaderManfest',
    images,
    itemIdentifier,
    itemTitle,
    baseHost
  );

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
  console.log('~~~~~ formattedformatted', formatted);

  const formattedWithImageData = await getImageData(formatted);

  const x: Record<any, any>[][] = [];

  formattedWithImageData.forEach((page, index) => {
    if (index === 0) {
      x.push([page]);
      return;
    }

    if (index % 2 === 1) {
      x.push([page]);
      return;
    }

    if (index % 2 === 0) {
      x[x.length - 1].push(page);
    }
  });

  const brOptions = {
    bookId: itemIdentifier,
    bookPath: `/download/${itemIdentifier}`,
    bookTitle: itemTitle,
    defaults: 'mode/1up',
    dfaultStartLeaf: 0,
    ppi: 200,
    data: x,
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
