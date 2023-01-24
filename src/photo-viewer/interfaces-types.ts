export interface IaItemMetadata {
  title: string;
  identifier: string;
}

export type BRImageInfo = {
  height: number;
  width: number;
  leafNum: number;
  pageSide: 'R' | 'L';
  pageType: 'Normal' | string;
  uri: string;
};

export type BookManifest = {
  data: {
    streamOnly: boolean;
    isRestricted: boolean;
    id: IaItemMetadata['identifier'];
    subPrefix: IaItemMetadata['identifier'] | string; // sub file path
    bookUrl: string;
  };
  brOptions: Object;
  metadata: Object;
};

export interface BookReader {
  init: () => void;
  resize: () => void;
  jumpToIndex: (index: number) => void;
  getPageURI: (index: number, reduce: number, rotate: number) => string;
  ppi: string;
  options: {
    /* lists images in 1 page or 2 page spread displays */
    data: [[BRImageInfo] | [BRImageInfo, BRImageInfo]];
  };
}
