import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-header',
  templateUrl: './team-header.component.html',
  styleUrls: ['./team-header.component.css']
})
export class TeamHeaderComponent implements OnInit {

  teamName = [];
  @Input("teamInfoArr") teamInfoArr;
  constructor() { }

  ngOnInit() {
    this.teamName = this.teamInfoArr[0].teamName;
  }

}
