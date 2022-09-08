import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCarouselItemComponent } from './portfolio-carousel-item.component';

describe('PortfolioCarouselItemComponent', () => {
  let component: PortfolioCarouselItemComponent;
  let fixture: ComponentFixture<PortfolioCarouselItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioCarouselItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
