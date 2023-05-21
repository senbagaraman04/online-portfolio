import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatorListComponent } from './components/creator/creator-list/creator-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreatorFormComponent } from './components/creator/creator-form/creator-form.component';
import { PortfoliocardsComponent } from './shared/portfoliocards/portfoliocards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioDetailsComponent } from './shared/portfolio-details/portfolio-details.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubCardComponent } from './shared/github-card/github-card.component';
import { StackoverflowCardComponent } from './shared/stackoverflow-card/stackoverflow-card.component';
 
@NgModule({
  declarations: [
    AppComponent,
  
    CreatorListComponent,
    HomepageComponent,
    CreatorFormComponent,
    PortfoliocardsComponent,
    PortfolioDetailsComponent,
    GithubCardComponent,
    StackoverflowCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
