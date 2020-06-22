import { Injectable } from '@angular/core';
import { Stat } from './stat';
import { Stats } from './stat-list';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  stats: Stat[] = [];

	constructor() {
		this.stats = Stats
	}
	getStats(): Stat[]{
		return this.stats;
	}
	updateStats(stats:number[]): void{
		for(var i = 0; i < stats.length; i++){
			this.stats[i].value += stats[i];
		}
	}

}
