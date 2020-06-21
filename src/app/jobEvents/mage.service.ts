import { Injectable } from '@angular/core';
import { ActiveJobsService } from '../active-jobs.service';

@Injectable({
  providedIn: 'root'
})
export class MageService {

  levelUp(level: number): void {
    if (level === 10) {
      this.activeJobs.add(6);
      this.activeJobs.add(7);
    }
  }

  constructor(private activeJobs: ActiveJobsService) { }
}
