import { localStore } from 'src/helpers/storage-helper';
import { environment } from '../../../environments/environment';
import {
  AppSettingActionTypes,
  IAppSettingState,
  SET_DIRECTION,
  SET_DRAWER,
  SET_IS_IDLE,
  SET_LOADING,
  SET_LOCALE,
} from './types';

const initialState: IAppSettingState = {
  loading: false,
  isIdle: false,
  drawer: false,
  direction: (localStore.get('direction') as IAppSettingState['direction']) || environment.initialLang.dir as IAppSettingState['direction'],
  locale: (localStore.get('lng') as IAppSettingState['locale']) || environment.initialLang.lng as IAppSettingState['locale'],
};

const appSettingReducer = (
    state = initialState,
    action: AppSettingActionTypes
) => {
  switch (action.type) {
    case SET_IS_IDLE:
      return {
        ...state,
        isIdle: action.isIdle,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case SET_DRAWER:
      return {
        ...state,
        drawer: action.drawer,
      };
    case SET_DIRECTION:
      localStore.set('direction', action.direction);
      return {
        ...state,
        direction: action.direction,
      };
    case SET_LOCALE:
      localStore.set('lng', action.locale);
      return {
        ...state,
        locale: action.locale,
      };
    default:
      return state;
  }
};

export default appSettingReducer;
