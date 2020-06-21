import { Injectable } from '@angular/core';
import { Job } from './job';
import { of, Observable } from 'rxjs';
import { Jobs } from './job-list';
import { AdventurerService } from './jobEvents/adventurer.service';
import { ActiveJobsService } from './active-jobs.service';
import { FighterService } from './jobEvents/fighter.service';
import { MageService } from './jobEvents/mage.service';
import { RogueService } from './jobEvents/rogue.service';

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
        break;
      case "Fighter":
        this.fighter.levelUp(job.level);
        break;
      case "Mage":
        this.mage.levelUp(job.level);
        break;
      case "Rogue":
        this.rogue.levelUp(job.level);
        break;

    }
  }

  constructor(private activeJobs: ActiveJobsService,
    private adventurer: AdventurerService,
    private fighter: FighterService,
    private mage: MageService,
    private rogue: RogueService
    ) {
    this.activeJobs.add(Jobs[0].id)
   }
}
