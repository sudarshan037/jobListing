import { Component, OnInit } from '@angular/core';
import { Job } from '../Job';
import { JobServiceService } from '../job-service.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent{
  title = 'Job Listing';
  currentJob?: Job = null;

  constructor(private jobServiceService: JobServiceService,) {
    jobServiceService.currentJob.subscribe(job => {
      this.currentJob = job;
    });
  }

  startNewSearch = () => {
    this.jobServiceService.changeSelectedJob(null);
  };

}
