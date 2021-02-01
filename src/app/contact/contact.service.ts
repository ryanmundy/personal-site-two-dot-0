import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  sendContactInfo(contactFormContent: any): Promise<any> {
    return this.httpClient.post<any>('/api/contact', contactFormContent).toPromise();
  }
}
