import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,AboutmeComponent,ProjectsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
