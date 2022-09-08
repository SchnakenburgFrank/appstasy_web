import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  currentSection = new BehaviorSubject('');
  changeForContact = new BehaviorSubject(false);
}

