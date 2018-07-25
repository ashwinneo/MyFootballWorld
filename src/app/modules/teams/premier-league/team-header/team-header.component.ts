import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-header',
  templateUrl: './team-header.component.html',
  styleUrls: ['./team-header.component.css']
})
export class TeamHeaderComponent implements OnInit {

  teamName = [];
  managerName = [];
  @Input("teamInfoArr") teamInfoArr;
  @Input("managerInfoArray") managerInfoArray;
  constructor() { }

  ngOnInit() {
    if (this.teamInfoArr) {
      this.teamName = this.teamInfoArr[0].teamName;
    } else if(this.managerInfoArray) {
    this.managerName = this.managerInfoArray[0].name;
    }
  }

}
