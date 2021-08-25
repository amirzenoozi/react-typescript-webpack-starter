export const SET_AUTH_USER = 'SET_AUTH_USER';
export const GET_AUTH_USER = 'GET_AUTH_USER';
export const REMOVE_AUTH_USER = 'REMOVE_AUTH_USER';

export interface IUserState {
  token: string;
  firstName: string,
  avatar: string,
}

interface ISetAuthUserAction {
  type: typeof SET_AUTH_USER;
  token: IUserState['token'];
  firstName: IUserState['firstName'];
  avatar: IUserState['avatar'];
}

interface IGetAuthUserAction {
  type: typeof GET_AUTH_USER;
}

interface IRemoveAuthUserAction {
  type: typeof REMOVE_AUTH_USER;
}

export interface IUserActions {
  setUserInfo: ({ token, firstName, avatar }: IUserState) => ISetAuthUserAction;
  getUserInfo: () => IGetAuthUserAction;
  removeUserInfo: () => IRemoveAuthUserAction;
}

export type UserActionTypes =
  | ISetAuthUserAction
  | IGetAuthUserAction
  | IRemoveAuthUserAction;
