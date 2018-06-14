import { Component, OnInit } from '@angular/core';
import { ManchesterUnitedServiceService } from './manchester-united-service.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-manchester-united',
  templateUrl: './manchester-united.component.html',
  styleUrls: ['./manchester-united.component.css']
})
export class ManchesterUnitedComponent implements OnInit {

  constructor(private manutdService: ManchesterUnitedServiceService,
  private router: ActivatedRoute,
  private spinner: NgxSpinnerService) { }
  manutdData = [];
  teamInfoArr = [];
  squadList = [];
  teamName: String;
  chevrolet: Boolean;
  yokohama: Boolean;
  flyEmirates: Boolean;
  adidas: Boolean;
  puma: Boolean;
  chelsea: Boolean;
  manutd: Boolean;
  arsenal: Boolean;
  ethihad: Boolean;
  nike: Boolean;
  mancity: Boolean;
  realMadrid: Boolean;
  rakuten: Boolean;
  barcelona: Boolean;
  athleticoMadrid: Boolean;
  plus500: Boolean;
  newBalance: Boolean;
  playTika: Boolean;
  sevilla: Boolean;
  telekom: Boolean;
  bayernMunich: Boolean;
  evonik: Boolean;
  bvb: Boolean;
  
  key: String = 'name'; //set default
  reverse: Boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit() {
    let name = this.router.snapshot.paramMap.get('name');
    this.teamName = name;
    console.log(this.teamName);

    // this.manutdService.getTeamInfo(this.teamName).subscribe(data => {
    //   console.log(data);
    //   this.spinner.show();
    //   this.teamInfoArr = data.leagueResponse;
    //   this.spinner.hide();
    //   this.getTeamSponsor(this.teamInfoArr);
    //   this.getSquadData();
    // });
    this.router.data.forEach((data) => {
      this.teamInfoArr = data.teamInfo.leagueResponse;
      this.spinner.hide();
      this.getTeamSponsor(this.teamInfoArr);
      this.getSquadData();
      console.log(data.admin);
    });
  }

  getSquadData() {
    this.manutdService.getTeamDetails().subscribe(data => {
      console.log(data);
      this.manutdData.push(data);
      this.spinner.hide();
      this.getTeamList(this.manutdData, this.teamInfoArr);
    });

  }

  getTeamSponsor(val) {
    if (val[0].teamSponsor === 'Chevrolet') {
      this.chevrolet = true;
    } else if (val[0].teamSponsor === 'Yokohama Tyres') {
      this.yokohama = true;
    } else if (val[0].teamSponsor === 'Fly Emirates') {
      this.flyEmirates = true;
    } else if (val[0].teamSponsor === 'Ethihad Airways') {
      this.ethihad = true;
    } else if (val[0].teamSponsor === 'Rakuten') {
      this.rakuten = true;
    } else if (val[0].teamSponsor === 'Plus 500') {
      this.plus500 = true;
    } else if (val[0].teamSponsor === 'Playtika') {
      this.playTika = true;
    } else if (val[0].teamSponsor === 'Telekom') {
      this.telekom = true;
    } else if (val[0].teamSponsor === 'Evonik') {
      this.evonik = true;
    }

    if(val[0].teamKitSponsor === 'Adidas') {
      this.adidas = true;
    } else if (val[0].teamKitSponsor === 'Puma') {
      this.puma = true;
    } else if (val[0].teamKitSponsor === 'Nike') {
      this.nike = true;
    } else if (val[0].teamKitSponsor === 'New Balance') {
      this.newBalance = true;
    }

    if (val[0].teamName === 'Chelsea') {
      this.chelsea = true;
    } else if (val[0].teamName === 'Manchester United') {
      this.manutd = true;
    } else if (val[0].teamName === 'Arsenal') {
      this.arsenal = true;
    } else if (val[0].teamName === 'Manchester City') {
      this.mancity = true;
    } else if (val[0].teamName === 'Real Madrid') {
      this.realMadrid = true;
    } else if (val[0].teamName === 'Barcelona') {
      this.barcelona = true;
    } else if (val[0].teamName === 'Athletico Madrid') {
      this.athleticoMadrid = true;
    } else if (val[0].teamName === 'Sevilla') {
      this.sevilla = true;
    } else if (val[0].teamName === 'Bayern Munich') {
      this.bayernMunich = true;
    } else if (val[0].teamName === 'Borussia Dortmund') {
      this.bvb = true;
    }
  }

  getTeamList(val, teamInfo) {
    if (teamInfo[0].teamName === 'Manchester United') {
      this.squadList = val[0].premierLeague.manchesterUnited;
    } else if (teamInfo[0].teamName === 'Chelsea') {
      this.squadList = val[0].premierLeague.chelsea;
    } else if (teamInfo[0].teamName === 'Arsenal') {
      this.squadList = val[0].premierLeague.arsenal;
    } else if (teamInfo[0].teamName === 'Manchester City') {
      this.squadList = val[0].premierLeague.manchesterCity;
    } else if (teamInfo[0].teamName === 'Real Madrid') {
      this.squadList = val[0].laLiga.realMadrid;
    } else if (teamInfo[0].teamName === 'Athletico Madrid') {
      this.squadList = val[0].laLiga.athleticoMadrid;
    } else if (teamInfo[0].teamName === 'Barcelona') {
      this.squadList = val[0].laLiga.barcelona;
    } else if (teamInfo[0].teamName === 'Sevilla') {
      this.squadList = val[0].laLiga.sevilla;
    }

  }

}
