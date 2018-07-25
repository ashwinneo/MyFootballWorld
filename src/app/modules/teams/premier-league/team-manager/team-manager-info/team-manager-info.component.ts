import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-team-manager-info',
  templateUrl: './team-manager-info.component.html',
  styleUrls: ['./team-manager-info.component.css']
})
export class TeamManagerInfoComponent implements OnInit {

  constructor(private router: ActivatedRoute,
  private spinner: NgxSpinnerService) { }
  managerInfoArray = [];
  ngOnInit() {
    this.spinner.show();
    this.router.data.forEach((data) => {
      this.managerInfoArray.push(data.managerInfo.leagueResponse);
      this.spinner.hide();
      console.log(this.managerInfoArray);
      // this.getTeamSponsor(this.teamInfoArr);
      // this.getSquadData();
      // console.log(this.teamInfoArr);
    });
  }

  

}
