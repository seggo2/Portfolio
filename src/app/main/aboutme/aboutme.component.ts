import { Component, HostListener , OnInit ,} from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',

  animations: [
    trigger('bildAnimation', [
      state('start', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition('* => start', [
        style({
          transform: 'translateX(100%)',
          opacity: 0,
        }),
        animate('1000ms ease-out'),
      ]),
    ]),
  ],
})

export class AboutmeComponent implements OnInit {

  private isInViewport = false;

  @HostListener('window:scroll', ['$event'])

  animationState = 'start';


  ngOnInit(): void {
    this.starteAnimation();
  }

  starteAnimation() {
    setInterval(() => {
      this.animationState = (this.animationState === 'start') ? 'void' : 'start';
    }, 2000); 
  }

  onScroll(event: Event, className: string) {
    event.preventDefault();
    if (className !== undefined) {
      const element = document.querySelector(`.${className}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        this.isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (this.isInViewport) {
          element.classList.remove('hidden');
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
          element.classList.add('hidden');
        }
      }
    }
  }
  
  
}
