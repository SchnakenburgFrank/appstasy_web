import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cta-buttons',
  templateUrl: './cta-buttons.component.html',
  styleUrls: ['./cta-buttons.component.scss']
})
export class CtaButtonsComponent implements OnInit {

  @ViewChild('ctaContainer', { static: true }) ctaContainer: ElementRef | undefined;
  @ViewChild('ctaHide', { static: true }) ctaHide: ElementRef | undefined;
  @ViewChild('ctaShow', { static: true }) ctaShow: ElementRef | undefined;

  ctasVisible = false;

  constructor(private renderer2: Renderer2) {
  }

  ngOnInit(): void {
  }

  openCta($event: MouseEvent): void {
    this.ctasVisible = true;
    this.renderer2.addClass(this.ctaHide?.nativeElement, 'rotate');
    this.renderer2.addClass($event.target, 'rotate');
    this.renderer2.addClass(this.ctaContainer?.nativeElement, 'animate-in');
  }

  closeCta($event: MouseEvent): void {
    this.ctasVisible = true;
    this.renderer2.removeClass(this.ctaHide?.nativeElement, 'rotate');
    this.renderer2.removeClass(this.ctaShow?.nativeElement, 'rotate');
    this.renderer2.removeClass($event.target, 'rotate');
    this.renderer2.removeClass(this.ctaContainer?.nativeElement, 'animate-in');
  }
}
