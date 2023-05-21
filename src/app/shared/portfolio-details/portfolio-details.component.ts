import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatorProfile } from 'src/app/service/CreatorProfile';
import { CreatorlistService } from 'src/app/service/creatorlist.service';
import { GithubService } from 'src/app/service/github.service';
import { StackoverflowService } from 'src/app/service/stackoverflow.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {

  profileDetails: CreatorProfile = {} as CreatorProfile;
  githubData: any;
  stacoverflowData: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private creatorService: CreatorlistService, private githubService: GithubService,
    private stackOverflowService: StackoverflowService) { }

  ngOnInit(): void {
    this.creatorService.dataBehaviourSubject.pipe().subscribe(data => {
      if (data == undefined) {
       this.pullDataonID();
       this.getGithubDetails();
       return;
      }
      this.profileDetails = data;
    
      this.getGithubDetails();
    });

   
  }


  private pullDataonID() {
    this.creatorService.getParticularCreator(this.route.snapshot.params['id']).then(prof => {
      console.log(prof);
      this.profileDetails = {
        name: prof['name'],
        title: prof['title'],
        subtitle: prof['subtitle'],
        technology: prof['technology'],
        stackoverflowId: prof['stackoverflowId'],
        description: prof['description'],
        
        githubUrl: prof['githubUrl'],
        linkedInUrl: prof['linkedInUrl'],
        country: prof['country'],
        id: prof['$id']
      };

      this.getGithubDetails();

    });
  }

  /**
   * Fetches the use details using github api service
   */
  getGithubDetails() {
    if (this.profileDetails.githubUrl) {
      const userName = this.profileDetails.githubUrl.substring(this.profileDetails.githubUrl.lastIndexOf('/') + 1);
      this.githubService.getUserDetails(userName).subscribe(response => {
        this.githubData = response;
      });
    }

    this.getStackOverflowDetails();
  }

  getStackOverflowDetails(){
    if(this.profileDetails.stackoverflowId){
      const userName = this.profileDetails.stackoverflowId.split('/');
      console.log(userName)
      this.stackOverflowService.getUserDetails(userName[4]).subscribe(response => {
        this.stacoverflowData = response.items[0];
        console.log(response.items[0]);
      });
    }
  }


  backButtonClick(){
    this.router.navigate(['./creatorlist'])
  }

}

