import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  openGitHub(){
    window.open('https://github.com/seggo2?tab=repositories', '_blank');
  }
}
