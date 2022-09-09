import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import { PortfolioContent } from '../../model/content';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-portfolio-carousel-item',
  templateUrl: './portfolio-carousel-item.component.html',
  styleUrls: ['./portfolio-carousel-item.component.scss']
})
export class PortfolioCarouselItemComponent implements OnInit, AfterViewInit {

  @HostBinding('attr.aria-labelledby') tabLabel = '';
  @HostBinding('attr.role') role = 'tabpanel';
  @HostBinding('class') class = '';
  @HostBinding('id') id = '';

  @Input() content!: PortfolioContent;
  @Input() first = false;
  @Input() category = 0;
  @Input() getChildIndex!: BehaviorSubject<boolean>;

  @Output() mockupEmitter = new EventEmitter<number>();

  target = '';

  myCarousel: HTMLElement | null = null;

  activeSlide = 0;

  constructor(protected renderer2: Renderer2, private ref: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.myCarousel = document.getElementById(this.target);
    this.myCarousel?.addEventListener('slide.bs.carousel', ($event) => {

      // @ts-ignore
      const toSlide = $event.to;

      this.activeSlide = toSlide;
      this.mockupEmitter.emit(toSlide);

    });
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

    this.getChildIndex.subscribe(value => {
      if (value && this.ref.nativeElement.classList.contains('active')) {
        this.mockupEmitter.emit(this.activeSlide);
      }
    });
  }

}
