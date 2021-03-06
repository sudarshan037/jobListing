import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { AuthenticationService } from '../authentication.service';
import { Job } from "../Job";

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
  @Input() job: Job;
  userId = localStorage.getItem('userId');
  url = "localhost:8080/favorites/api/v1"
  public loggedIn = false;
  constructor(private http: HttpClient, private authService: AuthenticationService) { }
  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn();
  }

  saveFavorite(): boolean {
    this.http.post("http://localhost:8081/favorites/api/v1/jobs/save",
      {
        "jobid": this.job['id'],
        "userid": this.userId
      })
      .subscribe((data) => console.log("saved:", data))
    return true;
  }

  deleteFavorite(): boolean {
    this.http.post("http://localhost:8081/favorites/api/v1/jobs/delete",
      {
        "jobid": this.job['id'],
        "userid": this.userId
      })
      .subscribe((data) => console.log("deleted: ", data))
    return true;
  }

  addToFavourite() {
    this.http.post(`${this.url}/jobs/save`, JSON.stringify({
      userid: this.userId,
      jobid: ""
    })).subscribe(data => {
      this.job = data;
    });
    console.log("job", this.job);
    console.log("added", JSON.stringify({
      userid: this.userId,
      jobid: ""
    }));
  }
}
