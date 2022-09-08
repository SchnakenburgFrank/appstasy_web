import { Component, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { PortfolioContent } from '../../model/content';

@Component({
  selector: 'app-portfolio-carousel-item',
  templateUrl: './portfolio-carousel-item.component.html',
  styleUrls: ['./portfolio-carousel-item.component.scss']
})
export class PortfolioCarouselItemComponent implements OnInit {

  @HostBinding('attr.aria-labelledby') tabLabel = '';
  @HostBinding('attr.role') role = 'tabpanel';
  @HostBinding('class') class = '';
  @HostBinding('id') id = '';

  @Input() category = 0;

  @Input() first = false;

  @Input() content!: PortfolioContent;

  target = '';

  constructor(protected renderer2: Renderer2) {
  }

  ngOnInit(): void {
    this.tabLabel = this.content.id + '-tab';
    this.id = this.content.id;

    this.target = 'carouselCaption-' + this.category;

    if (this.first) {
      this.class = 'tab-pane active';
    } else {
      this.class = 'tab-pane';
    }
  }
}
