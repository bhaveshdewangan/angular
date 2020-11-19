import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from '../../store/reducers/user.reducer';


export interface AppState {

  userState: fromUser.UserState;
}

export const reducers: ActionReducerMap<AppState> = {

  userState: fromUser.userReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
