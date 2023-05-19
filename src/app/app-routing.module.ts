import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorListComponent } from './components/creator/creator-list/creator-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreatorFormComponent } from './components/creator/creator-form/creator-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'creatorlist', component: CreatorListComponent },
  {
    path: 'creatorForm', component: CreatorFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
