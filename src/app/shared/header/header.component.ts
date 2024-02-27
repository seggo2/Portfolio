import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',

  animations: [
    trigger('bildAnimation', [
      state('start', style({
        transform: 'translateY(0)',
        opacity: 1,
      })),
      transition('* => start', [
        style({
          transform: 'translateY(100%)',
          opacity: 0,
        }),
        animate('1000ms ease-out'),
      ]),
    ]),
  ],
})

export class HeaderComponent {

  constructor(private router: Router , private translate: TranslateService) { }

  img = ['assets/imgs/header/burger menu S3.svg', 'assets/imgs/animations/x header/Property 1=Variant3.svg', 'assets/imgs/animations/x header/Property 1=Transition.svg', 'assets/imgs/animations/x header/Property 1=Variant4.svg', 'assets/imgs/animations/x header/Property 1=Variant5 (1).svg'];
  pictureIndex = 0;
  secondclick = 0;

  clickAnimation() {
    if (this.secondclick == 1) {
      this.closeToggle();
    } else {
      this.starteAnimation();
      this.secondclick = 1;
    }
  }

  closeToggle() {
    this.pictureIndex = 0;
    this.secondclick = 0;
    this.router.navigate(['']);
  }

  starteAnimation() {
    let nIntervId = setInterval(() => {
      if (this.pictureIndex >= 4) {
        this.router.navigate(['toggle']);
        clearInterval(nIntervId);
      } else {
        this.pictureIndex = (this.pictureIndex + 1) % this.img.length;
      }
    }, 160);
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }
}
