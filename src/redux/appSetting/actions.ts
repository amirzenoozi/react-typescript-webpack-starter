import {
  IAppSettingActions,
  SET_DIRECTION,
  SET_DRAWER,
  SET_IS_IDLE,
  SET_LOADING,
  SET_LOCALE,
} from './types';

const actions: IAppSettingActions = {
  setIsIdle: (isIdle) => ({
    type: SET_IS_IDLE,
    isIdle,
  }),
  setLoading: (loading) => ({
    type: SET_LOADING,
    loading,
  }),
  setDrawer: (drawer) => ({
    type: SET_DRAWER,
    drawer,
  }),
  setDirection: (direction) => ({
    type: SET_DIRECTION,
    direction,
  }),
  setLocale: (locale) => ({
    type: SET_LOCALE,
    locale,
  }),
};

export default actions;
