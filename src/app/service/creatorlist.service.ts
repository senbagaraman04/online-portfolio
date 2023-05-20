import { Injectable } from '@angular/core';
import { Account, Client, Databases, ID } from 'appwrite';
import { environment } from 'src/environments/environment';
import { CreatorProfile } from './CreatorProfile';

@Injectable({
  providedIn: 'root'
})
export class CreatorlistService {
  client: Client;
  databases: Databases;

  constructor(){
    this.client = new Client();
    this.client.setEndpoint(environment.appwriteurl).setProject(environment.projectID);  
    this.databases = new Databases(this.client);
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
    
    
    this.databases.createDocument(environment.databaseID,environment.collectionID, ID.unique(), profileData );
  }
   
}
