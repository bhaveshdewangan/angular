import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { GetUsers, GetUsersFailed, GetUsersLoaded, UserActionTypes } from '../actions/user.actions';
import { IUser } from '../models/user';
import { HttpResponse } from '@angular/common/http';
import { UserService } from '../../users/service/user.service';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  getUsers$: Observable<Action> = this.actions$
    .pipe(
      ofType(UserActionTypes.GetUsers),
      switchMap(action => this.userService.getUsers()
        .pipe(
          delay(5000),
          map((resp: HttpResponse<IUser[]>) => {
            return new GetUsersLoaded(resp)
          }),
          catchError(error => {
            return of(new GetUsersFailed(UserEffects.handleError(error)));
          })
        ))
    );
  
    private static handleError(error) {
      let err = {};
      if (error._body) {
        err = {
          error,
          message: JSON.parse(error._body)
        };
      } else if (error.error) {
        if (typeof (error.error) !== 'string') {
          err = {
            error,
            message: error.error
          };
        } else {
          err = {
            error,
            message: JSON.parse(error.error)
          };
        }
  
      } else if (error.message) {
        err = {
          error,
          message: JSON.parse(error.message)
        };
      }
      return err;
    }  



}
