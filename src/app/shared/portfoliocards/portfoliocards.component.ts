import { Component, Input } from '@angular/core';
import { CreatorProfile } from 'src/app/service/CreatorProfile';

@Component({
  selector: 'app-portfoliocards',
  templateUrl: './portfoliocards.component.html',
  styleUrls: ['./portfoliocards.component.scss']
})
export class PortfoliocardsComponent {

  @Input() items: CreatorProfile[] = [];

 }
