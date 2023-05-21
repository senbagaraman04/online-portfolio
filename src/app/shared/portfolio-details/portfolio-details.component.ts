import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatorProfile } from 'src/app/service/CreatorProfile';
import { CreatorlistService } from 'src/app/service/creatorlist.service';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {

  profileDetails: CreatorProfile = {} as CreatorProfile;
  githubData: any;

  constructor(private route: ActivatedRoute,
    private creatorService: CreatorlistService, private githubService: GithubService) { }

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
        gitLabUrl: prof['gitLabUrl'],
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
  }

}

