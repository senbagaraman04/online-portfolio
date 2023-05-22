import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stackoverflow-card',
  templateUrl: './stackoverflow-card.component.html',
  styleUrls: ['../github-card/github-card.component.scss']
})
export class StackoverflowCardComponent {

  @Input() stacoverflowData: any;
  
}
