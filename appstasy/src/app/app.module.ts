import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './pages/main/main.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { StaffCardComponent } from './components/worker-card/staff-card.component';
import { IsVisibleDirective } from './directives/is-visible.directive';
import { PortfolioCarouselItemComponent } from './components/portfolio-carousel-item/portfolio-carousel-item.component';
import { FlipCardComponent } from './components/portfolio-carousel-item/flip-card/flip-card.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BackgroundsComponent } from './components/backgrounds/backgrounds.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleComponent } from './pages/main/sections/title/title.component';
import { PortfolioComponent } from './pages/main/sections/portfolio/portfolio.component';
import { ReferencesComponent } from './pages/main/sections/references/references.component';
import { CtaButtonsComponent } from './components/cta-buttons/cta-buttons.component';
import { TeamComponent } from './pages/main/sections/team/team.component';
import { ClosingComponent } from './pages/main/sections/closing/closing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    CompanyCardComponent,
    StaffCardComponent,
    IsVisibleDirective,
    PortfolioCarouselItemComponent,
    FlipCardComponent,
    ImprintComponent,
    ContactComponent,
    BackgroundsComponent,
    FooterComponent,
    TitleComponent,
    PortfolioComponent,
    ReferencesComponent,
    CtaButtonsComponent,
    TeamComponent,
    ClosingComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
