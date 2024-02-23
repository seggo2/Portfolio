import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  openLink(key:string){
    if (key=='1') {
      window.open('https://github.com/seggo2?tab=repositories', '_blank');
    }else if(key=='2'){
      window.open('http://linkedin.com/in/sefa-gür-532119239', '_blank');
    }else if(key=='3'){
      window.open('https://www.xing.com/profile/sefa_guer2/web_profiles?expandNeffi=true', '_blank');
    }
  }
}
