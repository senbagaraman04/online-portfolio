import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatorListComponent } from './components/creator/creator-list/creator-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreatorFormComponent } from './components/creator/creator-form/creator-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorListComponent,
    HomepageComponent,
    CreatorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
