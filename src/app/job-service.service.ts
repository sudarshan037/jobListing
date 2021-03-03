import { HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { HttpClient, HttpParams } from "@angular/common/http";


import { Job } from "./Job";

@Injectable()
export class JobServiceService {
  private selectedJob$: Subject<Job> = new Subject<Job>();
  apiUrl = "https://www.themuse.com/api/public/jobs?page=1&company=";
  constructor(private http: HttpClient){}
  
  get currentJob() {
    return this.selectedJob$;
  }

  searchJob = (query: string) => {
    const params = new HttpParams()
    .set('query', query);
    return this.http.get<any>(this.apiUrl+params.get('query'));
  }

  changeSelectedJob(job: Job) {
    this.selectedJob$.next(job);
  }
}
