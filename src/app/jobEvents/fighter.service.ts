import { Injectable } from '@angular/core';
import { ActiveJobsService } from '../active-jobs.service';

@Injectable({
  providedIn: 'root'
})
export class FighterService {
  levelUp(level: number): void {
    if (level === 10) {
      this.activeJobs.add(4);
      this.activeJobs.add(5);      
    }
  }

  constructor(private activeJobs: ActiveJobsService) { }
}
