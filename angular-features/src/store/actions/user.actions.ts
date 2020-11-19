import { Action } from '@ngrx/store';
import { HttpResponse } from '@angular/common/http';
import { IUser } from '../models/user';

export enum UserActionTypes {
  GetUsers = '[User] Get Users',
  GetUsersLoading = '[User] Get Users Loading',
  GetUsersLoaded = '[User] Get Users Loaded',
  GetUsersFailed = '[User] Get Users Failed',
}

export class GetUsers implements Action {
  readonly type = UserActionTypes.GetUsers;
  constructor() { }
}

export class GetUsersLoading implements Action {
  readonly type = UserActionTypes.GetUsersLoading;
  constructor() { }
}

export class GetUsersLoaded implements Action {
  readonly type = UserActionTypes.GetUsersLoaded;
  constructor(public response: HttpResponse<IUser[]>) { }
}

export class GetUsersFailed implements Action {
  readonly type = UserActionTypes.GetUsersFailed;
  constructor(public response: {}) { }
}

export type UserActions =
  GetUsers
  | GetUsersLoading
  | GetUsersLoaded
  | GetUsersFailed;

