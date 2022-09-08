import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChildren('listEntry') listEntries = new QueryList<ElementRef>();
  @ViewChildren('mobileListEntry') mobileListEntries = new QueryList<ElementRef>();

  @Output() emitNav: EventEmitter<string> = new EventEmitter();
  @Input() currentSection: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(protected renderer2: Renderer2, protected navService: NavService) { }

  ngOnInit(): void {
    this.navService.currentSection.subscribe(value => {
      this.removeActive();
      if (!!value && value !== 'title') {
        const segment = this.getSegmentNumber(value);
        const listEntry = this.listEntries.toArray()[segment];
        if (segment !== -1) {
          this.renderer2.addClass(listEntry.nativeElement, 'active');
        }
      }
    });
  }

  openChat(): void {
    // new ZammadChat({fontSize: '12px', chatId: 1, show: false});
  }

  changeActive(listEntry: MouseEvent): void {
    this.removeActive();
    const selectedSegment = this.listEntries.toArray().findIndex(val => val.nativeElement === listEntry.target);
    const selectedMobileSegment = this.mobileListEntries.toArray().findIndex(val => val.nativeElement === listEntry.target);
    if (selectedSegment !== -1) {
      this.renderer2.addClass(listEntry.target, 'active');
      this.emitNav.emit(this.getSegmentTitle(selectedSegment));
    } else if (selectedMobileSegment !== -1) {
      this.emitNav.emit(this.getSegmentTitle(selectedMobileSegment));
    }
  }

  removeActive(): void {
    for (const listEntryElement of this.listEntries) {
      this.renderer2.removeClass(listEntryElement.nativeElement, 'active');
    }
  }

  protected getSegmentTitle(inputNumber: number): string {
    switch (inputNumber) {
      case 0:
        return 'portfolio';
      case 1:
        return 'references';
      case 2:
        return 'team';
      case 3:
        return 'contact';
    }
    return '';
  }

  protected getSegmentNumber(inputTitle: string): number {
    switch (inputTitle) {
      case 'portfolio':
        return 0;
      case 'references':
        return 1;
      case 'team':
        return 2;
      case 'contact':
        return 3;
    }
    return -1;
  }

}
