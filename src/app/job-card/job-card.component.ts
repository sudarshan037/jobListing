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
  jobId = "blah blah blah"
  url = "localhost:8080/favorites/api/v1"
  public loggedIn=false;
  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn();
  }

  addToFavourite(){
    this.http.post(`${this.url}/jobs/save`, JSON.stringify({
      userid: this.userId,
      jobid: this.jobId
    })).subscribe(data => {
      this.job = data;
    });
    console.log("job", this.job);
    console.log("added", JSON.stringify({
      userid: this.userId,
      jobid: this.jobId
    }));
  }
}
