import { Injectable } from '@angular/core';
import { Job } from './job';
import { of, Observable } from 'rxjs';
import { Jobs } from './job-list';
import { AdventurerService } from './jobEvents/adventurer.service';
import { ActiveJobsService } from './active-jobs.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  

  getJobs(): Observable<Job[]>{
    return of(this.activeJobs.getJobs());
  }
  levelUp(job: Job){
    switch(job.name){
      case "Adventurer":
        this.adventurer.levelUp(job.level);
    }
  }

  constructor(private activeJobs: ActiveJobsService,private adventurer: AdventurerService) {
    this.activeJobs.add(Jobs[0].id)
   }
}
