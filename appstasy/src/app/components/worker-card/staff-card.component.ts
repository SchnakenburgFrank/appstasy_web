import { Component, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { Employee } from '../../model/worker';

@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.scss']
})
export class StaffCardComponent implements OnInit {

  element: ElementRef;

  constructor(protected renderer2: Renderer2, element: ElementRef) {
    this.element = element;
  }

  @Input() first = false;
  @Input() even = false;
  @Input() odd = false;

  @Input() staff!: Employee;

  @HostBinding('class') firstCard: any;

  @HostListener('click')
  clicked(): void {
    this.first = true;
  }

  ngOnInit(): void {
    if (this.first) {
      this.firstCard = 'active';
    }
  }

  flipCard(flipcard: HTMLDivElement): void {
    let flip = false;
    if (flipcard.classList.contains('flip')) {
      this.renderer2.removeClass(flipcard, 'flip');
      flip = true;
    }
    if (!flip) {
      this.renderer2.addClass(flipcard, 'flip');
    }
  }

}
