import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatorListComponent } from './components/creator/creator-list/creator-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
   { path: 'home', component: HomepageComponent },
  { path: 'creatorlist', component: CreatorListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
