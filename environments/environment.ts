export const environment = {
  production: false,
  adaptiveBaseURL: false, // This option will ignore following address and use `window.location.origin` to determine api address
  apiRetryCount: 5,
  apiRetryDelay: 1500,
  apiAddress: '',
  socketAddress: '',
  UploadsBasePath: '',
  initialLang: {
    lng: 'fa',
    dir: 'rtl',
  },
};
