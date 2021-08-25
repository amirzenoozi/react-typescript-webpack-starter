export interface IApiGetProps {
  url: string;
  queryParams?: object;
  shouldAuth?: boolean;
  localStoreKey?: string;
  retryCount?: number;
  retryDelay?: number;
}

export interface IApiPostProps {
  url: string;
  body: object;
  queryParams?: object;
  shouldAuth?: boolean;
  localStoreKey?: string;
}

export interface IApiDeleteProps {
  url: string;
  queryParams?: object;
  shouldAuth?: boolean;
  localStoreKey?: string;
}
