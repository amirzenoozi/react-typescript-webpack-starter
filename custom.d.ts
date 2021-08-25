interface gifShotConfig {
  gifWidth?: number,
  gifHeight?: number,
  images?: Array<string>,
  video?: null | Array<string>,
  webcamVideoElement?: null,
  keepCameraOn?: boolean,
  cameraStream?: null,
  filter?: string,
  interval?: number,
  offset?: null | number,
  numFrames?: number,
  frameDuration?: number,
  text?: string,
  fontWeight?: string,
  fontSize?: string,
  minFontSize?: string,
  resizeFont?: boolean,
  fontFamily?: string,
  fontColor?: string,
  textAlign?: string,
  textBaseline?: string,
  textXCoordinate?: null,
  textYCoordinate?: null,
  progressCallback?: (captureProgress: any) => any,
  completeCallback?: () => void,
  sampleInterval?: number,
  numWorkers?: number,
  saveRenderingContexts?: boolean,
  savedRenderingContexts?: Array<any>,
  showFrameText?: boolean,
  crossOrigin?: string,
  waterMark?: any,
  waterMarkHeight?: number,
  waterMarkWidth?: number,
  waterMarkXCoordinate?: number,
  waterMarkYCoordinate?: number,
}

interface gifShot {
  createGIF( config: gifShotConfig, callback: (n: any) => any): void;
  takeSnapShot( callback: (n: any) => any): void;
  isExistingImagesGIFSupported(): boolean;
  isExistingVideoGIFSupported(formats: Array<string>): boolean;
  isWebCamGIFSupported(): boolean;
  isSupported(): boolean;
  stopVideoStreaming(): void;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}

declare module '*.jpeg' {
  const value: any;
  export default value;
}

declare module '*.eot';
declare module '*.ttf';
declare module '*.woff2';
declare module '*.woff';
declare module 'react-hammerjs';
declare module '@react-corekit/use-idle';
declare module 'react-country-flag';
declare module 'gifshot' {
  const gifShot: gifShot;
  export default gifShot;
}
