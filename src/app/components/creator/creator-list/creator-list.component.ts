import { Component, OnInit } from '@angular/core';
import { CreatorProfile } from '../../../service/CreatorProfile';
import { CreatorlistService } from 'src/app/service/creatorlist.service';

@Component({
  selector: 'app-creator-list',
  templateUrl: './creator-list.component.html',
  styleUrls: ['./creator-list.component.scss']
})
export class CreatorListComponent  implements OnInit {
  items: CreatorProfile[] = [];
  constructor(private creatorListService: CreatorlistService) { }
 

  ngOnInit(): void {
    this.pullCreators();
  }
  pullCreators() {
    
       this.items = this.creatorListService.getCreatorList()
     
  }

}
