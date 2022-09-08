import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {

  constructor(protected renderer2: Renderer2, protected router: Router, protected navService: NavService) {
  }

  ngOnInit(): void {
    this.navService.changeForContact.subscribe(changeNecessary => {
      if (changeNecessary) {
        const div = new Object({ id: 'team', contact: true }) as HTMLDivElement;
        this.sectionIntersecting(div);
      }
    });
  }

  sectionIntersecting(section: any): void {
    switch (section.id) {
      case 'title':
        this.renderer2.removeClass(document.getElementById('bg-mountain-gradient'), 'transform');
        this.renderer2.removeClass(document.getElementById('bg-mountain-gradient'), 'show');
        this.renderer2.removeClass(document.getElementById('bg-mountain-crystal'), 'transform');
        this.renderer2.removeClass(document.getElementById('bg-pic1'), 'float-in');
        this.renderer2.removeClass(document.getElementById('faint-pf'), 'show');
        this.renderer2.removeClass(document.getElementById('faint-PuR'), 'show');
        this.renderer2.removeClass(document.getElementById('faint-team'), 'show');
        break;

      case 'portfolio':
        this.renderer2.addClass(document.getElementById('bg-mountain-gradient'), 'transform');
        this.renderer2.addClass(document.getElementById('bg-mountain-gradient'), 'show');
        this.renderer2.addClass(document.getElementById('bg-mountain-crystal'), 'transform');
        this.renderer2.removeClass(document.getElementById('bg-mountain-white'), 'show');
        this.renderer2.removeClass(document.getElementById('bg-mountain-crystal'), 'show');
        this.renderer2.addClass(document.getElementById('bg'), 'invisible');
        this.renderer2.addClass(document.getElementById('bg-pic1'), 'float-in');
        this.renderer2.addClass(document.getElementById('faint-pf'), 'show');
        this.renderer2.removeClass(document.getElementById('faint-PuR'), 'show');
        break;

      case 'references':
        this.renderer2.addClass(document.getElementById('bg'), 'change');
        this.renderer2.removeClass(document.getElementById('bg'), 'invisible');
        this.renderer2.addClass(document.getElementById('bg-mountain-gradient'), 'transform');
        this.renderer2.addClass(document.getElementById('bg-mountain-white'), 'show');
        this.renderer2.addClass(document.getElementById('bg-mountain-crystal'), 'transform');
        this.renderer2.removeClass(document.getElementById('bg-pic1'), 'float-in');
        this.renderer2.removeClass(document.getElementById('bg-pic2'), 'float-in');
        this.renderer2.removeClass(document.getElementById('bg-pic3'), 'float-in');
        this.renderer2.removeClass(document.getElementById('faint-pf'), 'show');
        this.renderer2.addClass(document.getElementById('faint-PuR'), 'show');
        this.renderer2.removeClass(document.getElementById('faint-team'), 'show');
        break;

      case 'team':
        this.renderer2.addClass(document.getElementById('bg-mountain-gradient'), 'transform');
        this.renderer2.addClass(document.getElementById('bg-mountain-gradient'), 'show');
        this.renderer2.addClass(document.getElementById('bg-mountain-white'), 'transform');
        this.renderer2.addClass(document.getElementById('bg-mountain-crystal'), 'transform');
        this.renderer2.removeClass(document.getElementById('bg-mountain-white'), 'show');
        this.renderer2.removeClass(document.getElementById('bg-mountain-crystal'), 'show');
        this.renderer2.addClass(document.getElementById('bg'), 'invisible');
        this.renderer2.removeClass(document.getElementById('bg-mountain-gradient'), 'transform-mobile');
        this.renderer2.removeClass(document.getElementById('faint-PuR'), 'show');
        if (!section?.contact) {
          this.renderer2.addClass(document.getElementById('faint-team'), 'show');
        } else {
          this.renderer2.removeClass(document.getElementById('faint-team'), 'show');
        }
        break;

      case 'closing':
        this.renderer2.addClass(document.getElementById('bg'), 'change');
        this.renderer2.removeClass(document.getElementById('bg'), 'invisible');
        this.renderer2.addClass(document.getElementById('bg-mountain-white'), 'show');
        this.renderer2.removeClass(document.getElementById('faint-team'), 'show');
        break;
    }

    if (!section?.contact) {
      this.navService.currentSection.next(section.id);
    }

  }
}
