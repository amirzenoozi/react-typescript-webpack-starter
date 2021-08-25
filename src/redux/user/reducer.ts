import { localStore } from 'src/helpers/storage-helper';
import {
  IUserState,
  UserActionTypes,
  SET_AUTH_USER,
  GET_AUTH_USER,
  REMOVE_AUTH_USER,
} from './types';

const initialState: IUserState = {
  token: localStore.get('token'),
  firstName: '',
  avatar: '',
};

const userReducer = (
    state = initialState,
    action: UserActionTypes,
): IUserState => {
  switch (action.type) {
    case SET_AUTH_USER:
      localStore.set('token', action.token);
      return {
        ...state,
        token: action.token,
        firstName: action.firstName,
        avatar: action.avatar,
      };

    case GET_AUTH_USER:
      return {
        ...state,
        token: state.token,
      };

    case REMOVE_AUTH_USER:
      localStore.clear('token');
      return {
        token: undefined,
        firstName: undefined,
        avatar: undefined,
      };

    default:
      return state;
  }
};

export default userReducer;
