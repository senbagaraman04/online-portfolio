import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CreatorProfile } from 'src/app/service/CreatorProfile';
import { CreatorlistService } from 'src/app/service/creatorlist.service';

@Component({
  selector: 'app-portfoliocards',
  templateUrl: './portfoliocards.component.html',
  styleUrls: ['./portfoliocards.component.scss']
})
export class PortfoliocardsComponent {

  @Input() items: CreatorProfile[] = [];
  @Input() showButton = true;

  constructor(private router:Router, private creatorService: CreatorlistService){
   
  }

  /**
   * Invoked when user clicks on the view more button
   */
  viewMore(selectedProfile: CreatorProfile) {
     this.router.navigate(['./details',selectedProfile.id ]);
     this.creatorService.profileDataPush(selectedProfile);
  }


  showDescription(desp: string | undefined) {

    return desp?.substring(0,50).concat('....');

  }

 }
