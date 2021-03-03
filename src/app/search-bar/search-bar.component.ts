import { JobServiceService } from "./../job-service.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { debounceTime, map } from "rxjs/operators";

import { Job } from "../Job";
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchResults: Job[] = [];
  search = "";
  search$: Subject<String> = new Subject<String>();
  fetching = false;
  showingJob = false;
  @Input() currentJob: Job;
  @Output() startNewSearch = new EventEmitter();
  
  constructor(private jobServiceService: JobServiceService) { }

  ngOnInit() {
    this.search$
      .pipe(debounceTime(500))
      .pipe(map(query => {
        this.fetching = true;
        return query;
      }))
      .subscribe(this.searchQuery.bind(this));
  }
  searchQuery = (query: string) => {
    this.showingJob = false;
    if (query.length > 0) {
      this.jobServiceService.searchJob(query).subscribe(results => {
        this.fetching = true;
        this.searchResults = results["results"];
        // this.searchResults = results["jobs"];
        console.log("searchResults: ", this.searchResults);
      });
    } else {
      this.fetching = false;
      this.searchResults = [];
    }
  };

  setCurrentJob(job: Job) {
    console.log("in setCurrentJob", job);
    this.jobServiceService.changeSelectedJob(job);
    this.showingJob = true;
  }

}
