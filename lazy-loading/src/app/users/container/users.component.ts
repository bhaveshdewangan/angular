import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store"
import { Observable, Subject, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as UserAction from "../../store/actions/user.actions";
import * as fromUsers from "../../store/selectors/user.selectors"

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  USERS_DATA: any = {
    users: [],
    usersLoading$: of(false),
    usersLoadingFailed$: of(false),
  };
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new UserAction.GetUsers());
    this.USERS_DATA = {
      ...this.USERS_DATA,
      usersLoading$: this.store.pipe(takeUntil(this.destroy$), select(fromUsers.getUsersLoading)),
      usersLoadingFailed$: this.store.pipe(takeUntil(this.destroy$), select(fromUsers.getUsersFailed))
    };
    // this.store.pipe(takeUntil(this.destroy$), select(fromUsers.getUsersLoading))
    //   .subscribe(resp => console.log("IS LOADING", resp));
    // this.store.pipe(takeUntil(this.destroy$), select(fromUsers.getUsersFailed))
    //   .subscribe(resp => console.log("IS FAILED", resp));  
    this.store.pipe(takeUntil(this.destroy$), select(fromUsers.getUsers))
      .subscribe(resp => {
        
        this.USERS_DATA = {
          ...this.USERS_DATA,
          users: resp
        };
        console.log(this.USERS_DATA);
      })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
