import { Injectable } from '@angular/core';
import { ActiveJobsService } from '../active-jobs.service';
import { StatsService } from '../stats.service';

@Injectable({
  providedIn: 'root'
})
export class AdventurerService {
  levelUpStats: number[] = [1,1,1,1,1,1,1,1]
  levelUp(level: number): void {

    if (level === 5) {
      this.activeJobs.add(1);
      this.activeJobs.add(2);
      this.activeJobs.add(3);
    }
    this.statsService.updateStats(this.levelUpStats);
  }

  constructor(private activeJobs: ActiveJobsService, private statsService: StatsService) { }
}
