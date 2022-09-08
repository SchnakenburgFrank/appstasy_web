import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { references } from '../../../../data/references-content';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {

  id = 'references';

  references = references;

  activeReference = 0;

  @ViewChildren('portfolioCard', { read: ElementRef }) portfolioCards = new QueryList<ElementRef>();

  constructor(private renderer2: Renderer2) {
  }

  changeActivePortfolioCard($event: any, index: number): void {
    this.activeReference = index;
    this.portfolioCards.map(card => this.renderer2.removeClass(card.nativeElement, 'active'));
    this.renderer2.addClass($event.element.nativeElement, 'active');
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
