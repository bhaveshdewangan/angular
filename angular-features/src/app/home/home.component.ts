import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    container: any
    turbines: any
    constructor(private http: HttpClient) {
        this.http.get('http://myjson.dit.upm.es/api/bins/1abp').pipe(
            map(res => res)
        ).subscribe(res=>{
            console.log("RESPONSE IN SUBS", res);
            this.turbines = res
        });
     }

    ngOnInit() {
        this.container = document.getElementsByClassName('container');
    }

    doComplexTask() {
        if (typeof Worker !== 'undefined') {
            // Create a new

            const worker = new Worker('./home.worker', { type: 'module' });
            worker.onmessage = ({ data }) => {
                console.log(`page got message: ${data}`);
            };
            worker.postMessage('hello');
        } else {
            // Web Workers are not supported in this environment.
            // You should add a fallback so that your program still executes correctly.
        }
    }

    doEasyTask() {
        document.querySelector('#easy').innerHTML += "Hi! "
    }

}

