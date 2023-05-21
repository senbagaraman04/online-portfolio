import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StackoverflowService {

  constructor(private http: HttpClient) { }


  getUserDetails(userId: string): Observable<any> {
    return this.http.get(
      'https://api.stackexchange.com/2.3/users/'+userId+'?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=reputation&filter=default');
  }
}
