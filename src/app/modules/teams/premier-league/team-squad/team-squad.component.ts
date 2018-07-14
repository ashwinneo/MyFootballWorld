import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-team-squad',
  templateUrl: './team-squad.component.html',
  styleUrls: ['./team-squad.component.css']
})
export class TeamSquadComponent implements OnInit {

  @Input("manutdData") manutdData;
  @Input("teamInfoArr") teamInfoArr;
  teamInfo = [];
  squadList = [];
  constructor() { }
  
  key: String = 'playerName';
  reverse: Boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit() {
    this.teamInfo = this.teamInfoArr;
    //console.log(this.teamInfoArr);
    this.getSquadData(this.manutdData, this.teamInfo);
  }

  getSquadData(val, teamInfo) {
    if (this.teamInfo[0].teamName === 'Manchester United') {
      this.squadList = val;
    } else if (teamInfo[0].teamName === 'Chelsea') {
      this.squadList = val;
    } else if (teamInfo[0].teamName === 'Arsenal') {
      this.squadList = val;
    } else if (teamInfo[0].teamName === 'Manchester City') {
      this.squadList = val;
    } else if (teamInfo[0].teamName === 'Real Madrid') {
      this.squadList = val;
    } else if (teamInfo[0].teamName === 'Athletico Madrid') {
      this.squadList = val;
    } else if (teamInfo[0].teamName === 'Barcelona') {
      this.squadList = val;
    } else if (teamInfo[0].teamName === 'Sevilla') {
      this.squadList = val;
    }
  }
}
