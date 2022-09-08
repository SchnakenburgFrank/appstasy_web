import { Component, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { Content } from '../../../model/portfolioContent';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  @HostBinding('class') classAttribute = '';

  @Input() first = false;
  @Input() content!: Content;

  constructor(protected renderer2: Renderer2) {
  }

  ngOnInit(): void {
    if (this.first) {
      this.classAttribute = 'carousel-item active';
    } else {
      this.classAttribute = 'carousel-item';
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
