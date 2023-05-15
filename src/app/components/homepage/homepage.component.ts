import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  year = new Date().getFullYear();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  hireTalenBtn(): void {
    this.router.navigate(['/creatorlist']).then();
  }

  createBtn(): void {
    this.router.navigate(['/creatorForm']).then();
  }
}
