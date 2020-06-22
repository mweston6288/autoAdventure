import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';
import { Stat } from '../stat';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  stats: Stat[]

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
    this.stats = this.statsService.getStats()
  }

}
