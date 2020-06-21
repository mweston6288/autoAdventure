import { Injectable } from '@angular/core';
import { Job } from './job';
import { of, Observable } from 'rxjs';
import { Jobs } from './job-list';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  activeJobs: Job[] = [];
  

  getJobs(): Observable<Job[]>{
    return of(this.activeJobs);
  }
  add(id: number){
    this.activeJobs.push(Jobs[id]);
  }

  constructor() {
    this.activeJobs.push(Jobs[0])
   }
}
