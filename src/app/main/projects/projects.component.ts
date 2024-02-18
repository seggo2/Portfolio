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
}
