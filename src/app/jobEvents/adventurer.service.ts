import { Injectable } from '@angular/core';
import { JobService } from '../job.service';
import { ActiveJobsService } from '../active-jobs.service';

@Injectable({
  providedIn: 'root'
})
export class AdventurerService {
  levelUp(level: number): void {
    if (level === 5) {
      this.activeJobs.add(1);
      this.activeJobs.add(2);
      this.activeJobs.add(3);
    }
  }

  constructor(private activeJobs: ActiveJobsService) { }
}