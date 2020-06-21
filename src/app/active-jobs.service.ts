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
    this.sortById();
  }
  private sortById():void{
    var temp
    var i= this.jobs.length-1;
    while ( i > 0 && this.jobs[i].id < this.jobs[i-1].id){
      temp = this.jobs[i];
      this.jobs[i]=this.jobs[i-1];
      this.jobs[i-1]=temp;
      i--;
    }
  }
  constructor() { }
}
