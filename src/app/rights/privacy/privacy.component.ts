import { Component } from '@angular/core';
import { TranslateService,TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

}
