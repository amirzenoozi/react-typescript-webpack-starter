import { delay, map, retryWhen, take } from 'rxjs/operators';
import { defer, Observable } from 'rxjs';
import { IApiGetProps, IApiPostProps, IApiDeleteProps } from './api.interface';
import initializeAxios from './axios-setup';
import { axiosRequestConfiguration } from './config';
import { localStore } from 'src/helpers/storage-helper';
import { AxiosResponse } from 'axios';
import { environment } from '../../../environments/environment';

const axiosInstance = initializeAxios(axiosRequestConfiguration);

const get = <T>({
  url,
  queryParams,
  shouldAuth = false,
  localStoreKey = 'token',
  retryCount = environment.apiRetryCount,
  retryDelay = environment.apiRetryDelay,
}: IApiGetProps): Observable<AxiosResponse> => {
  return defer(() => axiosInstance.get(url, {
    params: queryParams,
    ...(shouldAuth && {
      headers: { Authorization: `Bearer ${localStore.get(localStoreKey)}` },
    }),
  })).pipe(map((result) => result), retryWhen((errors) => errors.pipe(delay(retryDelay), take(retryCount)) ));
};

const post = <T>({
  url,
  body,
  queryParams,
  shouldAuth = false,
  localStoreKey = 'token',
}: IApiPostProps): Observable<T | void> => {
  return defer(() =>
    axiosInstance.post<T>(url, body, {
      params: queryParams,
      ...(shouldAuth && {
        headers: { Authorization: `Bearer ${localStore.get(localStoreKey)}` },
      }),
    }),
  ).pipe(map((result) => result.data));
};

const put = <T>({
  url,
  body,
  queryParams,
  shouldAuth = false,
  localStoreKey = 'token',
}: IApiPostProps): Observable<T | void> => {
  return defer(() =>
    axiosInstance.put<T>(url, body, {
      params: queryParams,
      ...(shouldAuth && {
        headers: { Authorization: `Bearer ${localStore.get(localStoreKey)}` },
      }),
    })
  ).pipe(map((result) => result.data));
};

const patch = <T>({
  url,
  body,
  queryParams,
  shouldAuth = false,
  localStoreKey = 'token',
}: IApiPostProps): Observable<T | void> => {
  return defer(() =>
    axiosInstance.patch<T>(url, body, {
      params: queryParams,
      ...(shouldAuth && {
        headers: { Authorization: `Bearer ${localStore.get(localStoreKey)}` },
      }),
    })
  ).pipe(map((result) => result.data));
};

const deleteR = <T>({
  url,
  queryParams,
  shouldAuth = false,
  localStoreKey = 'token',
}: IApiDeleteProps): Observable<T | void> => {
  return defer(() => axiosInstance.delete(url, {
    params: queryParams,
    ...(shouldAuth && {
      headers: { Authorization: `Bearer ${localStore.get(localStoreKey)}` },
    }),
  })).pipe(
      map((result) => result.data)
  );
};

export default { get, post, put, patch, delete: deleteR };
