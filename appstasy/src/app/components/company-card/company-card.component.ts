import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Reference } from '../../model/reference';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {

  @Input() reference!: Reference;

  element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
  }

  ngOnInit(): void {
  }

}
