import { Component, Input } from '@angular/core';
import { CreatorProfile } from 'src/app/service/CreatorProfile';

@Component({
  selector: 'app-portfoliocards',
  templateUrl: './portfoliocards.component.html',
  styleUrls: ['./portfoliocards.component.scss']
})
export class PortfoliocardsComponent {

  @Input() items: CreatorProfile[] = [];
  @Input() showButton = true;

  /**
   * Invoked when user clicks on the view more button
   */
  viewMore() {
     
  }

 }
