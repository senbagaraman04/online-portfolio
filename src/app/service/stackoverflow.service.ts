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
      'https://api.stackexchange.com/2.3/users/'+userId+'?key=YfDrpJNHlVWz42hs78eD)w((&site=stackoverflow&order=desc&sort=reputation&filter=default');
  }
}
