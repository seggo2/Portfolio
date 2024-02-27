import { Component } from '@angular/core';
import { TranslateService,TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-toggle-menu',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './toggle-menu.component.html',
  styleUrl: './toggle-menu.component.scss'
})
export class ToggleMenuComponent {
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}
