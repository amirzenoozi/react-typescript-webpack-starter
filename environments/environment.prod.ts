export const environment = {
  production: true,
  adaptiveBaseURL: true, // This option will ignore following address and use `window.location.origin` to determine api address
  apiRetryCount: 7,
  apiRetryDelay: 1500,
  apiAddress: '',
  socketAddress: '',
  UploadsBasePath: '',
  initialLang: {
    lng: 'fa',
    dir: 'rtl',
  },
};
