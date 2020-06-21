import { Component, OnInit } from '@angular/core';
import {Jobs} from "../job-list"
import { JobService } from '../job.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs = Jobs;
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs()
      .subscribe(res=>this.jobs=res)
  }
  handleClick(jobId: number, jobLevel: number): void{
    console.log(jobId);
    console.log(jobLevel);
    var job=this.jobs.find(x=>x.id === jobId);
    job.level++;
    if (job.level >=5){
      this.jobService.add(1);
    }
    console.log(this.jobs);
  }
}
