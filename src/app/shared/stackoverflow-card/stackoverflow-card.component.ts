import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stackoverflow-card',
  templateUrl: './stackoverflow-card.component.html',
  styleUrls: ['../github-card/github-card.component.scss']
})
export class StackoverflowCardComponent implements OnInit {

  @Input() stacoverflowData: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
