import { Component, OnInit } from '@angular/core';
import {Jobs} from "../job-list"
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs = Jobs;
  constructor() { }

  ngOnInit(): void {
  }
  handleClick(jobId: number, jobLevel: number): void{
    console.log(jobId);
    console.log(jobLevel);
  }
}
