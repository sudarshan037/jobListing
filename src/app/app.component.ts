import { Component } from '@angular/core';
import { Job } from "./Job";
import { JobServiceService } from "./job-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheMuse';
  currentJob?: Job = null;
  
  constructor(private jobServiceService: JobServiceService) {
    jobServiceService.currentJob.subscribe(job => {
      this.currentJob = job;
    });
  }

  startNewSearch = () => {
    this.jobServiceService.changeSelectedJob(null);
  };
}
