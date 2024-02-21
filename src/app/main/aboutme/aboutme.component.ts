import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  private isInViewport = false;
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
