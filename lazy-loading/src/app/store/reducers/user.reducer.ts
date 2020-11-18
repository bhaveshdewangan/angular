import { Action } from '@ngrx/store';
import { UserActions, UserActionTypes } from '../actions/user.actions';
import { IUser } from '../models/user';


// export const userFeatureKey = 'user';

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
      console.log("INSIDE GetUsers");
      break;

    case UserActionTypes.GetUsersLoading:
      console.log("INSIDE GetUsersLoading");
      return {
        ...state,
        users: null,
        userLoading: true,
        userLoaded: false,
        userFailed: false,
      };

    case UserActionTypes.GetUsersLoaded:
      console.log("INSIDE GetUsersLoaded");
      return {
        ...state,
        users: action.response.body,
        userLoading: false,
        userLoaded: true,
        userFailed: false,
      };

    case UserActionTypes.GetUsersFailed:
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
