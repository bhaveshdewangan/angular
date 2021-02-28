import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class TranslateUiService {
    constructor(private translateService: TranslateService) {}

    translateInIt() {
        this.translateService.addLangs(['en', 'pt', 'es']);
        this.translateService.setDefaultLang('en');
        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/en|es|pt|/) ? browserLang : 'en');
    }
}