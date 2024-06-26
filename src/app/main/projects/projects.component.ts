import { Component,HostListener } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { TranslateService,TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AboutmeComponent,TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  isHovered: { [key: string]: boolean } = {};
  private isInViewport = false;
  
  
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  
  onImageHover(value: boolean, projectKey: string): void {
    this.isHovered[projectKey] = value;
  }
  
  Project(indent: string): void {
    const urls: { [key: string]: string } = {
      '5': 'https://sefa-guer.developerakademie.net/angular-projects/videoflix/login',
      '4': 'https://sefa-guer.developerakademie.net/angular-projects/simple/index.html',
      '3': 'https://sefa-guer.developerakademie.net/Modul%209%20Poke-Wiki/index.html',
      '2': 'https://sefa-guer.developerakademie.net/modul%2011%20game/index.html',
      '1': 'https://sefa-guer.developerakademie.net/components/login/login.html',
    };
    
    const url = urls[indent];
    
    if (url) {
      window.open(url, '_blank');
    }
  }
  
  
  gitHub(indent: string): void {
    const urls: { [key: string]: string } = {
      '6': 'https://github.com/seggo2/videoflix-backend',
      '5': 'https://github.com/seggo2/videoflix_Frontend',
      '4': 'https://github.com/seggo2/Portfolio',
      '3': 'https://github.com/seggo2/Pokedex',
      '2': 'https://github.com/seggo2/pollo-loco',
      '1': 'https://github.com/seggo2/Join',
    };
    
    const url = urls[indent];
    
    if (url) {
      window.open(url, '_blank');
    }
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
