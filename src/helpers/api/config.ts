import { AxiosRequestConfig } from 'axios';
import { environment } from '../../../environments/environment';

const baseURL = environment.adaptiveBaseURL ? window.location.origin : environment.apiAddress;

export const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};
