import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Appstasy';
  currentSection = new BehaviorSubject('');

  constructor(protected router: Router) {
  }

  scrollToSegment(segmentName: any): void {
    const el = document.getElementById(segmentName);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  ngOnInit(): void {
  }
}
