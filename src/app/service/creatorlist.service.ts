import { Injectable } from '@angular/core';
import { Client, Databases } from 'appwrite';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreatorlistService {
  client: Client;

  constructor(){
    this.client = new Client();
    this.client.setEndpoint(environment.appwriteurl).setProject(environment.projectID);  
  }
  

  /**
   * Get a list of all the user's documents stored in the DB
   * @returns Creator Profile in Document Format.
   */
  getCreatorList() {   
    return new Databases(this.client).listDocuments(environment.databaseID,environment.collectionID);
  }
   
}
