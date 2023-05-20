import { Component, OnInit } from '@angular/core';
import { CreatorProfile } from '../../../service/CreatorProfile';
import { CreatorlistService } from 'src/app/service/creatorlist.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creator-list',
  templateUrl: './creator-list.component.html',
  styleUrls: ['./creator-list.component.scss']
})
export class CreatorListComponent implements OnInit {
  items: CreatorProfile[] = [];
  creatorForm!: FormGroup;
  constructor(private creatorListService: CreatorlistService) { }


  ngOnInit(): void {
    this.creatorForm = new FormGroup({ searchVar: new FormControl('',) });


    this.pullCreators();

    this.getFormControl('searchVar').valueChanges.subscribe((data: string) => {
      if (data !== '') {
        this.items = this.items.filter(x => {
          return x.name.toLocaleLowerCase().includes(data.toLocaleLowerCase())
        })
      } else {
        this.pullCreators();
      }
    });
  }

  pullCreators() {
    this.creatorListService.getCreatorList()
      .then(rep => {
        rep.documents.forEach(prof => {
          this.items.push({
            name: prof['name'],
            title: prof['title'],
            subtitle: prof['subtitle'],
            technology: prof['technology'],
            stackoverflowId: prof['stackoverflowId'],
            description: prof['description'],
            gitLabUrl: prof['gitLabUrl'],
            githubUrl: prof['githubUrl'],
            linkedInUrl: prof['linkedInUrl']
          });
        });
      });
  }

  getFormControl(fieldName: string): FormControl {
    return this.creatorForm.get(fieldName) as FormControl;
  }

}
