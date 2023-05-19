import { Injectable } from '@angular/core';
import { CreatorProfile } from './CreatorProfile';

@Injectable({
  providedIn: 'root'
})
export class CreatorlistService {

  constructor(){
    //Write code to hit the Appwrite here...
  }
  
  getCreatorList(): CreatorProfile[] {

    const cProfiles: CreatorProfile[] = [
      {
        name: 'Jones Smith',
        subtitle: '',
        title: 'Front End Developer',
        description: 'full stack developer with 20 years of expereicne',
        technology: 'UX, Figmaz',
        githubUrl: 'http://www.github.com',
        stackoverflowId: 'http://www.github.com',
        gitLabUrl: 'http://www.github.com',
        linkedInUrl:'http://www.github.com',
      },
      {
        name: 'Senbagaraman M',
        subtitle: '',
        title: 'Professional Technology Manipulator',
        githubUrl: 'http://www.github.com',
        stackoverflowId: 'http://www.github.com',
      },
      {
        name: 'Mukesh',
        subtitle: '',
        title: 'Señor System Administrator',
        githubUrl: 'http://www.github.com',
        stackoverflowId: 'http://www.github.com',
      },
      {
        name: 'Daisy',
        subtitle: '',
        title: 'Tech Monkey '
      },
      {
        name: 'Luna Charlie',
        subtitle: '',
        title: 'Tech Monkey '
      },
      {
        name: 'Simba Bella',
        subtitle: '',
        title: 'Tech Monkey '
      },
      {
        name: 'Charley David',
        subtitle: '',
        title: 'Tech Monkey '
      },
      {
        name: 'Max',
        subtitle: '',
        title: 'Tech Monkey '
      }
    ]
    return cProfiles;
  }
   
}
