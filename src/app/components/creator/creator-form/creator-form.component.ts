import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creator-form',
  templateUrl: './creator-form.component.html',
  styleUrls: ['./creator-form.component.scss']
})
export class CreatorFormComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(     private router: Router) {
    
   }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    // this.loginForm = this.fb.group({
    //   email: ["", Validators.required],
    //   password: ["", Validators.required]    
    // });
  }

  onLogin() {
     
  }


}
