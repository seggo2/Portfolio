import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  isHovered: { [key: string]: boolean } = {};

  onImageHover(value: boolean, projectKey: string): void {
    this.isHovered[projectKey] = value;
  }

  Project(indent: string): void {
    const urls: { [key: string]: string } = {
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
  
  
}
