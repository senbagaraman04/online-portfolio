import { Injectable } from '@angular/core';
import { Client, Databases, ID } from 'appwrite';
import { environment } from 'src/environments/environment';
import { CreatorProfile } from './CreatorProfile';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatorlistService {
  client: Client;
  databases: Databases;
  dataBehaviourSubject: BehaviorSubject<any>;

  constructor(){
    this.client = new Client();
    this.client.setEndpoint(environment.appwriteurl).setProject(environment.projectID);  
    this.databases = new Databases(this.client);
    this.dataBehaviourSubject = new BehaviorSubject<any>(undefined);
  }
  

  /**
   * Get a list of all the user's documents stored in the DB
   * @returns Creator Profile in Document Format.
   */
  getCreatorList() {   
    return this.databases.listDocuments(environment.databaseID,environment.collectionID);
  }

  /**
   * Adds the profile to the database
   */
  addProfiles(profileData: CreatorProfile){ 
      return this.databases.createDocument(environment.databaseID,environment.collectionID, ID.unique(), profileData );
  }


  profileDataPush(data: any): void {
    this.dataBehaviourSubject.next(data);
  }


  /**
   * gets the particular creator data
   * @returns 
   */
  getParticularCreator(docID: string){
    return this.databases.getDocument(environment.databaseID,environment.collectionID, docID);
  }

   
}
