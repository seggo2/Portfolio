import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService,TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private http: HttpClient, private router: Router , public translate: TranslateService) { 
    this.translate.setDefaultLang('en');
  }

  contentEditable = false;

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = false;


  post = {
    endPoint: 'https://sefa-guer.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (this.contentEditable == true) {
      if (ngForm.submitted && ngForm.form.valid) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
          ngForm.resetForm();
        }
    } else {
      let terms = document.getElementById('terms')
      terms?.classList.toggle('hide')
    }
  }



  toggleEditable(event: any) {
    if (event.target.checked) {
      this.contentEditable = true;
    }
  }


  routePrivacy() {
    this.router.navigate(['privacy']);
  }
}
