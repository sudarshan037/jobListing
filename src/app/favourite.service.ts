import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FavouriteJob } from './Job';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  userId = localStorage.getItem('userId');
  url = "localhost:8080/favorites/api/v1/"
  constructor(private http: HttpClient) { }

  // getAllJobs(){
  //   console.log("blah+++++++++++++++++++");
  //   this.http.get(`${this.url}/users/${this.userId}`);
  // }

  // addJob(job: FavouriteJob){
  //   const url = `${this.url}/users/${this.userId}`;
  //   return this.http.post(url, job);
  // }
}
