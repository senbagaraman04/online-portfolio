import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-portfolio';
  showHeader = true;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (router.url.startsWith('/details')) {
       this.showHeader = false;
      }
      else{
        this.showHeader = true;
      }
    })
  }

}
 