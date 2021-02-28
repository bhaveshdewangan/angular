import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateUiService } from '../../src/shared/service/translate-ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TranslateUiService]
})
export class AppComponent {
  title = 'app';

  constructor(
    public translateUiService: TranslateUiService,
    public translateService: TranslateService
  ) {
    this.translateUiService.translateInIt();
  }
}
