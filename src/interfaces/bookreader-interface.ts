export interface BookReaderLeafInfo {
  width: number;
  height: number;
  uri: string;
  leafNum: number; // 0-indexed
  pageType: 'Normal' | 'Cover' | 'Title' | string;
  pageSide: 'L' | 'R';
}

export interface BookReaderOptions {
  data: {
    streamOnly: boolean;
    isRestricted: boolean;
    id: string;
    subPrefix: string;
    bookUrl: string;
  };
  brOptions: Record<any, any>;
  metadata: Record<any, any>;
}
