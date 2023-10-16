import { Component } from '@angular/core';
import { Data } from './data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  model = new Data("", "", "", "");

  constructor (private http: HttpClient) {}

  public submitted = false;

  onSubmit() {
    console.log(this.submitted, this.model);
    this.http.post("https://getform.io/f/f9304776-6432-4258-bd18-9c060dccccf5", this.model, {headers: {'Accept': 'application/json'}})
    .subscribe((data) => {
      this.submitted = true;
      this.model = new Data("", "", "", "");
    }
    );
  }

  get() {
    this.submitted;
  }

}
