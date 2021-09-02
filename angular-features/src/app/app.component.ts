import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { from, of, Subject } from 'rxjs';
import { concatMap, delay, mergeMap, switchMap } from 'rxjs/operators';
import { TranslateUiService } from '../../src/shared/service/translate-ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TranslateUiService]
})
export class AppComponent implements OnInit {
  title = 'app';
  text: Subject<string> = new Subject<string>()

  constructor(
    public translateUiService: TranslateUiService,
    public translateService: TranslateService,
  ) {
    this.translateUiService.translateInIt();
  }


  ngOnInit() {
    const source = from(['CAKE', 'TOAST', 'BEER']);

    // this.text.pipe(switchMap(data => this.formateData(data))).subscribe(res=> console.log(res));

    // source.pipe(switchMap(data => this.formateData(data))).subscribe(res=> console.log(res));

    // source.pipe(mergeMap(data => this.formateData(data))).subscribe(res=> console.log(res));

    // source.pipe(concatMap(data => this.formateData(data))).subscribe(res=> console.log(res));

  }

  formateData(prop) {
    console.log("PROP", prop);
    return of(`this is ${prop}`).pipe(delay(2000));
  }
}
