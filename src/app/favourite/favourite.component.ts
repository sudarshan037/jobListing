import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavouriteService } from '../favourite.service';
import { FavouriteJob, Job } from '../Job';

const headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  userId = localStorage.getItem('userId');
  jobs: any;
  url = "localhost:8080/favorites/api/v1/"
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.saveFavorite();
    this.showFavorite();
  }

  showFavorite(): void{
    this.http.get(`http://localhost:8081/favorites/api/v1/users/${this.userId}`)
    .subscribe((data) => {
    this.jobs = data, console.log("showFavorite()", data)})
  }

  // saveFavorite(): boolean{
  //   this.http.post("http://localhost:8081/favorites/api/v1/jobs/save",
  //   {
  //     "jobid": "blah test",
  //     "userid": "gabbar101"
  //   })
  //   .subscribe((data) => console.log(data))
  //   return true;
  // }
}
