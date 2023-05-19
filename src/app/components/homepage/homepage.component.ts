import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent {

  year = new Date().getFullYear();

  constructor(private router: Router) { }

  /**
   * Invoked when the user click the hire talent button
   */
  hireTalenBtn(): void {
    this.router.navigate(['/creatorlist']).then();
  }

  /**
   * Invoked when user clicks the create button
   */
  createBtn(): void {
    this.router.navigate(['/creatorForm']).then();
  }
}
