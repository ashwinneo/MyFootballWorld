import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent implements OnInit {

  teamInfoArr1: String;
  @Input('teamInfoArr') teamInfoArr;
  constructor() { }

  ngOnInit() {
    this.teamInfoArr1 = this.teamInfoArr;
  }

}
