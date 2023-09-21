import { Component } from '@angular/core';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.css']
})
export class NewrequestComponent {
  submitForm() {
    // Implement your logic to handle the form submission here
    console.log('Form submitted.');
  }
}
