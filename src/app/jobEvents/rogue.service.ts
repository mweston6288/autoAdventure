import { Injectable } from '@angular/core';
import { ActiveJobsService } from '../active-jobs.service';

@Injectable({
  providedIn: 'root'
})
export class RogueService {

  levelUp(level: number): void {
    if (level === 10) {
      this.activeJobs.add(8);
      this.activeJobs.add(9);
    }
  }

  constructor(private activeJobs: ActiveJobsService) { }}
