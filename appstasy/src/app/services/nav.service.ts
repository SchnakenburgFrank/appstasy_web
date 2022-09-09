import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  currentSection = new BehaviorSubject('');
  changeForContact = new BehaviorSubject(false);
  contactMail: string | undefined = undefined;


  setContactMail(mail: string | undefined): void {
    this.contactMail = mail;
  }
}

