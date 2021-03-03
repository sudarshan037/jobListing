import { Component, Input, OnInit } from '@angular/core';
import { Job } from "../Job";

@Component({
  selector: 'app-job-search-item',
  templateUrl: './job-search-item.component.html',
  styleUrls: ['./job-search-item.component.css']
})
export class JobSearchItemComponent implements OnInit {
  @Input() job: Job = {};
  @Input() index: number;
  constructor() {}

  ngOnInit() {}

  backdropStyle = () => {
    console.log("Job: ", this.job);
    return {
      background: `linear-gradient(180deg, rgba(0,0,0,.7), transparent), url(http://image.tmdb.org/t/p/w300/jLslJietfQJEgOvQHk4fRYFCnTS.jpg)`,
      "background-size": "cover"
    };
  };

  animationDelay = () => ({
    "animation-delay": `${this.index * 0.15}s`
  });
}
