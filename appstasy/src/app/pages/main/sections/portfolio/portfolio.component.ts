import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { portfolioContents, portfolioTeaserContent } from '../../../../data/portfolio-content';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  id = 'portfolio';

  activeContent = 0;

  portfolioTeaserContent = portfolioTeaserContent;
  portfolioContents = portfolioContents;

  @ViewChildren('catButton') catButtons = new QueryList<ElementRef>();
  @ViewChildren('catCarouselButton') catCarouselButtons = new QueryList<ElementRef>();

  currentBgPic = 'bg-pic1';

  constructor(private renderer2: Renderer2) {
  }

  changeActive($event: any): void {
    this.catButtons.map(button => this.renderer2.removeClass(button.nativeElement, 'active'));
    this.renderer2.addClass($event.target, 'active');

    const selectedButton = this.catButtons.toArray().findIndex(val => val.nativeElement === $event.target);
    const selectedBgPic = 'bg-pic' + (selectedButton + 1);

    this.renderer2.removeClass(document.getElementById(this.currentBgPic), 'float-in');
    this.renderer2.addClass(document.getElementById(selectedBgPic), 'float-in');

    this.currentBgPic = selectedBgPic;

    this.catButtons.map((item, index) => {
      if (item.nativeElement === $event.target) {
        this.activeContent = index;
      }
    });
  }

  hideCard(card: HTMLDivElement, menu: HTMLDivElement,
           parent: HTMLDivElement, carousel: HTMLDivElement,
           mockup: HTMLDivElement, placeholder: HTMLDivElement,
           placeholder2: HTMLDivElement, carouselPic?: HTMLDivElement): void {

    this.renderer2.addClass(card, 'hide-right');
    this.renderer2.addClass(menu, 'hide-left');

    menu.addEventListener('animationend', () => {
      this.renderer2.removeClass(parent, 'd-lg-flex');
      this.renderer2.removeClass(carousel, 'd-lg-none');
      this.renderer2.addClass(carousel, 'appear');
      this.renderer2.addClass(mockup, 'appear-right');
      this.renderer2.removeClass(placeholder, 'd-lg-flex');
      this.renderer2.addClass(menu, 'd-none');
      this.renderer2.removeClass(menu, 'd-lg-block');
      this.renderer2.removeClass(placeholder2, 'd-lg-flex');
    });
  }

  changeActiveFromCarousel($event: MouseEvent): void {
    const selectedButton = this.catCarouselButtons.toArray().findIndex(val => val.nativeElement === $event.target);
    const selectedBgPic = 'bg-pic' + (selectedButton + 1);

    this.renderer2.removeClass(document.getElementById(this.currentBgPic), 'float-in');
    this.renderer2.addClass(document.getElementById(selectedBgPic), 'float-in');

    this.currentBgPic = selectedBgPic;
  }
}
