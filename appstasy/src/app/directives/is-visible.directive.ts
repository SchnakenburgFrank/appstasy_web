import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})

/**
 * IS VISIBLE DIRECTIVE
 * --------------------
 * Checks if given element is Visible on screen.
 * Usage: <div *isVisible>I'm on screen!</div>
 * threshold is set to 0.5 so that the directive only activates if element is 50% visible on screen
 */
export class IsVisibleDirective implements AfterViewInit {

  @Output() intersecting = new EventEmitter();

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    const observedElement = this.el.nativeElement;

    const options = { threshold: 0.5 };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.intersecting.emit(entry.isIntersecting);
      }
    }, options);
    observer.observe(observedElement);
  }
}
