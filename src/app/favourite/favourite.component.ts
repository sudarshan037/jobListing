import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavouriteService } from '../favourite.service';
import { FavouriteJob } from '../Job';

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
  }

  getJobs() {
    this.http.get(`${this.url}/users/${this.userId}`).subscribe(
      (data => {
        this.jobs = data;
        console.log("blah", this.jobs)
      })
    );
    // this.http.get(`${this.url}/users/${this.userId}`).subscribe(
    //   (data: any) => {
    //     this.data = data;
    //     console.log("look: ", this.data);
    //   }
    // );
  }
}
