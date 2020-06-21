import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../job';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[];

  constructor(private jobService: JobService) {
    console.log(jobService);
   }

   ngOnInit(): void {
    this.jobService.getJobs()
      .subscribe(res=>{
        this.jobs=res;
        console.log(res)
      })
  }
  handleClick(job:Job): void {
    job.level++;
    console.log(this.jobs);
    this.jobService.levelUp(job);
    if (job.level === 5) {
    }
  }
}
