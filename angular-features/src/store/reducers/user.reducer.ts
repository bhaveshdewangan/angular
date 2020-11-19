import { UserActions, UserActionTypes } from '../actions/user.actions';
import { IUser } from '../models/user';

export interface UserState {
  users: IUser[],
  userLoading: boolean,
  userLoaded: boolean,
  userFailed: any
}

export const initialState: UserState = {
  users: null,
  userLoading: false,
  userLoaded: false,
  userFailed: null
};

export function userReducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {

    case UserActionTypes.GetUsers:
    case UserActionTypes.GetUsersLoading:
      console.log("GET-USERS-LOADING");
      return {
        ...state,
        users: null,
        userLoading: true,
        userLoaded: false,
        userFailed: false,
      };

    case UserActionTypes.GetUsersLoaded:
      console.log("GET-USERS-LOADED");
      return {
        ...state,
        users: action.response.body,
        userLoading: false,
        userLoaded: true,
        userFailed: false,
      };

    case UserActionTypes.GetUsersFailed:
      console.log("GET-USERS-FAILED");
      return {
        ...state,
        users: null,
        userLoading: false,
        userLoaded: false,
        userFailed: action.response,
      }

    default:
      return state;
  }
}
