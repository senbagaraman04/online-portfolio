import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-card',
  templateUrl: './github-card.component.html',
  styleUrls: ['./github-card.component.scss']
})
export class GithubCardComponent implements OnInit {

  @Input() githubData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
