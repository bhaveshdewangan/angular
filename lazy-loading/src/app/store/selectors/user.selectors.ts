import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

export const getUserState = createFeatureSelector<UserState>('userState');

export const getUsers = createSelector(
    getUserState,
    state => {
        if (state && state.users != null) {
            return state.users;
          }
    }
)

export const getUsersLoading = createSelector(
    getUserState,
    state => {
        if (state && state.userLoading != null) {
            return state.userLoading;
          }
    }
)

export const getUsersLoaded = createSelector(
    getUserState,
    state => {
        if (state && state.userLoaded != null) {
            return state.userLoaded;
          }
    }
)

export const getUsersFailed = createSelector(
    getUserState,
    state => {
        if (state && state.userFailed != null) {
            return state.userFailed;
          }
    }
)