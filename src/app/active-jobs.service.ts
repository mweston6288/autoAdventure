import { Injectable } from '@angular/core';
import { Job } from './job';
import { Jobs } from './job-list';

@Injectable({
  providedIn: 'root'
})
export class ActiveJobsService {
  jobs: Job[] = [];
  getJobs(){
    return this.jobs;
  }
  add(id: number): void{
    this.jobs.push(Jobs[id]);
  }
  constructor() { }
}
