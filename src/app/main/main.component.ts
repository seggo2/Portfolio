import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,AboutmeComponent,ProjectsComponent,ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
