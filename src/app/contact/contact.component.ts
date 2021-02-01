import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactFormContent = {
    name: 'test name',
    email: 'test@test.com',
    message: 'test message content'
  }

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

 async submitContactForm() {
   let submitted = await this.contactService.sendContactInfo(this.contactFormContent);
    console.log(submitted);
  }

}
