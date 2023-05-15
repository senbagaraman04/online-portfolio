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
        profilePic: '',
        subtitle: '',
        title: 'Front End Developer'
      },
      {
        name: 'Senbagaraman M',
        profilePic: '',
        subtitle: '',
        title: 'Professional Technology Manipulator'
      },
      {
        name: 'Mukesh',
        profilePic: '',
        subtitle: '',
        title: 'Señor System Administrator'
      },
      {
        name: 'Daisy',
        profilePic: '',
        subtitle: '',
        title: 'Tech Monkey '
      },
      {
        name: 'Luna Charlie',
        profilePic: '',
        subtitle: '',
        title: 'Tech Monkey '
      },
      {
        name: 'Simba Bella',
        profilePic: '',
        subtitle: '',
        title: 'Tech Monkey '
      },
      {
        name: 'Charley David',
        profilePic: '',
        subtitle: '',
        title: 'Tech Monkey '
      },
      {
        name: 'Max',
        profilePic: '',
        subtitle: '',
        title: 'Tech Monkey '
      }
    ]
    return cProfiles;
  }
   
}
