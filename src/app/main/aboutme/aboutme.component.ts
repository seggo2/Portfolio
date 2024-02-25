import { Component, HostListener , OnInit ,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'], 
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

export class AboutmeComponent implements OnInit {
  
  
  private isInViewport = false;

  img = ['assets/imgs/animations/scrolldown/Group 3 (1).svg','assets/imgs/animations/scrolldown/Group 3 (2).svg','assets/imgs/animations/scrolldown/Group 3 (3).svg','assets/imgs/animations/scrolldown/Group 3 (4).svg','assets/imgs/animations/scrolldown/Group 3 (5).svg',];
  pictureIndex = 0;


  ngOnInit(): void {
    this.starteAnimation();
  }

  starteAnimation() {
    setInterval(() => {
        this.pictureIndex = (this.pictureIndex + 1) % this.img.length;
    }, 500); 
  }

  @HostListener('window:scroll', ['$event'])
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
  

