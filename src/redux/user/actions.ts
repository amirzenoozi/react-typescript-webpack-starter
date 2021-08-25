import {
  IUserActions,
  SET_AUTH_USER,
  GET_AUTH_USER,
  REMOVE_AUTH_USER,
} from './types';

const actions: IUserActions = {
  setUserInfo: ({ token, firstName, avatar }) => ({
    type: SET_AUTH_USER,
    token,
    firstName,
    avatar,
  }),
  getUserInfo: () => ({
    type: GET_AUTH_USER,
  }),
  removeUserInfo: () => ({
    type: REMOVE_AUTH_USER,
  }),
};

export default actions;
