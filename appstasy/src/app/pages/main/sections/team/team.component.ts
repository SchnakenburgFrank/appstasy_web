import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Employee } from '../../../../model/worker';
import { StaffCardComponent } from '../../../../components/worker-card/staff-card.component';
import { staff } from '../../../../data/team-content';
import { NavService } from '../../../../services/nav.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  id = 'team';

  @ViewChildren('staffCard', { read: ElementRef }) staffCards = new QueryList<ElementRef>();

  activeWorker: Employee | undefined;
  staff = staff;

  constructor(private renderer2: Renderer2, private navService: NavService) {
  }

  ngOnInit(): void {
    this.activeWorker = this.staff[0];
    this.navService.setContactMail(this.activeWorker.mail);
  }

  changeActiveWorkerCard($event: StaffCardComponent): void {
    this.staffCards.map((card) => {
      this.renderer2.removeClass(card.nativeElement, 'active');
    });
    this.activeWorker = $event.staff;
    this.renderer2.addClass($event.element.nativeElement, 'active');

    this.navService.setContactMail(this.activeWorker.mail);
  }
}
