import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from '../../store/models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http:HttpClient) {}

    private static handleError(error: any) {
        return throwError(error);
    }
    
    getUsers(): Observable<HttpResponse<IUser[]>> {
        console.log("SERVICE CALL")
        // return this.http.get<any>('../../store/mock-data/users.json');
        return this.http.get<HttpResponse<IUser[]>>('https://api.mocki.io/v1/3858c9bc').pipe(
            tap(resp => {return resp}),
            catchError(UserService.handleError)
        );
      }
}