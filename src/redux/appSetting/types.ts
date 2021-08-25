import { AlertProps } from '@material-ui/lab/Alert';
import { CameraInfoProps } from 'src/entities/board-data.interface';

export const SET_IS_IDLE = 'SET_IS_IDLE';
export const SET_LOADING = 'SET_LOADING';
export const SET_DRAWER = 'SET_DRAWER';
export const SET_DIRECTION = 'SET_DIRECTION';
export const SET_LOCALE = 'SET_LOCALE';


export interface IAppSettingState {
  loading: boolean;
  isIdle: boolean;
  drawer: boolean;
  direction: 'rtl' | 'ltr';
  locale: 'fa' | 'en';
}

interface ISetIsIdle {
  type: typeof SET_IS_IDLE;
  isIdle: IAppSettingState['isIdle'];
}

interface ISetLoading {
  type: typeof SET_LOADING;
  loading: IAppSettingState['loading'];
}

interface ISetDrawer {
  type: typeof SET_DRAWER;
  drawer: IAppSettingState['drawer'];
}

interface ISetDirection {
  type: typeof SET_DIRECTION;
  direction: IAppSettingState['direction'];
}

interface SetLocale {
  type: typeof SET_LOCALE;
  locale: IAppSettingState['locale'];
}

export interface IAppSettingActions {
  setIsIdle: (isIdle: IAppSettingState['isIdle']) => ISetIsIdle;
  setLoading: (loading: IAppSettingState['loading']) => ISetLoading;
  setDrawer: (drawer: IAppSettingState['drawer']) => ISetDrawer;
  setDirection: (direction: IAppSettingState['direction']) => ISetDirection;
  setLocale: (locale: IAppSettingState['locale']) => SetLocale;
}

export type AppSettingActionTypes =
  | ISetIsIdle
  | ISetLoading
  | ISetDrawer
  | ISetDirection
  | SetLocale;
