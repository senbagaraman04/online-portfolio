import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatorListComponent } from './components/creator/creator-list/creator-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreatorFormComponent } from './components/creator/creator-form/creator-form.component';
import { PortfoliocardsComponent } from './shared/portfoliocards/portfoliocards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioInputComponent } from './shared/portfolio-input/portfolio-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorListComponent,
    HomepageComponent,
    CreatorFormComponent,
    PortfoliocardsComponent,
    PortfolioInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
