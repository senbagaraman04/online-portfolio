import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CREATOR_FORMS } from './creator-form.models';
import { CreatorlistService } from 'src/app/service/creatorlist.service';

@Component({
  selector: 'app-creator-form',
  templateUrl: './creator-form.component.html',
  styleUrls: ['./creator-form.component.scss']
})
export class CreatorFormComponent implements OnInit {

  creatorForm!: FormGroup;
  showtoast = false;
  constructor(private creatorService: CreatorlistService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.createLoginForm();
  }

  /**
   * Initailizes and creates the form
   */
  createLoginForm(){
    this.creatorForm = CREATOR_FORMS();
  }


  /**
   * Method called when user clicks the form  to create the profile
   */
  profileCreation() {
    this.creatorService.addProfiles(this.creatorForm.value).then(_response => {
        this.router.navigate(['/creatorlist']).catch(() => { });
      }, _error => {
         this.showtoast = true;
      });   
  }

  toastClose() {
    this.showtoast = false;
  }


}
