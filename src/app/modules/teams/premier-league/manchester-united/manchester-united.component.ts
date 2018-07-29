import { Component, OnInit } from '@angular/core';
import { ManchesterUnitedServiceService } from './manchester-united-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Chart } from 'angular-highcharts';
import { CommonServiceService } from './../../../../core/common-service/common-service.service';
@Component({
  selector: 'app-manchester-united',
  templateUrl: './manchester-united.component.html',
  styleUrls: ['./manchester-united.component.css']
})
export class ManchesterUnitedComponent implements OnInit {

  constructor(private manutdService: ManchesterUnitedServiceService,
  private router: ActivatedRoute,
  private spinner: NgxSpinnerService,
  private route: Router,
  private cs: CommonServiceService) { }
  manutdData = [];
  teamInfoArr = [];
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
  liverpool: Boolean;
  scharted: Boolean;
  aia: Boolean;
  tottenham: Boolean;
  teamManager = [];
  src: String;
  teamKitSrc: String;
  widthSrc: String;
  heightSrc: String;
  widthSponsor: String;
  heightSponsor: String;
  everton: Boolean;
  psg: Boolean;
  isEditable: Boolean = false;
  isNonEdit: Boolean = false;
  id: String;
  teamname: String;
  adminSuccess: String;
  alertSuccess: Boolean;
  teamPlayDiscipline = [];
  attackDefense = [];
  teamKitArray = [
    {
      'label': 'Adidas',
      'teamKit': '/assets/images/team-kit-sponsor/adidas.png',
      'width': '30',
      'height': '20'
    },
    {
      'label': 'Puma',
      'teamKit': '/assets/images/team-kit-sponsor/puma.png',
      'width': '30',
      'height': '20'
    },
    {
      'label': 'Nike',
      'teamKit': '/assets/images/team-kit-sponsor/nike.png',
      'width': '50',
      'height': '30'
    },
    {
      'label': 'New Balance',
      'teamKit': '/assets/images/team-kit-sponsor/newBalance.png',
      'width': '50',
      'height': '50'
    },
    {
      'label': 'Umbro',
      'teamKit': '/assets/images/team-kit-sponsor/umbro.png',
      'width': '30',
      'height': '30'
    }
  ]

  teamJerseyArray = [
    {
      'label': 'Chevrolet',
      'teamSponsor': '/assets/images/team-sponsor/chevrolet.png',
      'width': '30',
      'height': '20'
    },
    {
      'label': 'Yokohama Tyres',
      'teamSponsor': '/assets/images/team-sponsor/yokohama.png',
      'width': '70',
      'height': '50'
    },
    {
      'label': 'Fly Emirates',
      'teamSponsor': '/assets/images/team-sponsor/flyEmirates.png',
      'width': '50',
      'height': '50'
    },
    {
      'label': 'Ethihad Airways',
      'teamSponsor': '/assets/images/team-sponsor/ethihad.png',
      'width': '70',
      'height': '50'
    },
    {
      'label': 'Rakuten',
      'teamSponsor': '/assets/images/team-sponsor/rakuten.png',
      'width': '50',
      'height': '40'
    },
    {
      'label': 'Plus 500',
      'teamSponsor': '/assets/images/team-sponsor/plus500.png',
      'width': '80',
      'height': '80'
    },
    {
      'label': 'Playtika',
      'teamSponsor': '/assets/images/team-sponsor/playTika.png',
      'width': '30',
      'height': '30'
    },
    {
      'label': 'Telekom',
      'teamSponsor': '/assets/images/team-sponsor/telekom.png',
      'width': '30',
      'height': '30'
    },
    {
      'label': 'Evonik',
      'teamSponsor': '/assets/images/team-sponsor/evonik.png',
      'width': '80',
      'height': '20'
    },
    {
      'label': 'Standard Charted',
      'teamSponsor': '/assets/images/team-sponsor/standardCharted.gif',
      'width': '80',
      'height': '20'
    },
    {
      'label': 'AIA',
      'teamSponsor': '/assets/images/team-sponsor/aia.png',
      'width': '80',
      'height': '20'
    },
    {
      'label': 'Sportpesa',
      'teamSponsor': '/assets/images/team-sponsor/sportpesa.jpg',
      'width': '60',
      'height': '30'
    },
    {
      'label': 'Jeep',
      'teamSponsor': '/assets/images/team-sponsor/jeep.png',
      'width': '60',
      'height': '30'
    },
    {
      'label': 'King Power',
      'teamSponsor': '/assets/images/team-sponsor/kingPower.webp',
      'width': '60',
      'height': '30'
    }
  ]


  ngOnInit() {
    this.isNonEdit = true;
    let name = this.router.snapshot.paramMap.get('name');
    this.teamName = name;
    //console.log(this.teamName);
    
    // this.manutdService.getTeamInfo(this.teamName).subscribe(data => {
    //   //console.log(data);
    //   this.spinner.show();
    //   this.teamInfoArr = data.leagueResponse;
    //   this.spinner.hide();
    //   this.getTeamSponsor(this.teamInfoArr);
    //   this.getSquadData();
    // });
    this.router.data.forEach((data) => {
      this.teamInfoArr.push(data.teamInfo.leagueResponse);
      this.id = this.teamInfoArr[0].id;
      this.teamPlayDiscipline = this.teamInfoArr[0].teamPlayDiscipline;
      this.attackDefense = this.teamInfoArr[0].attackDefense;
      console.log(this.teamPlayDiscipline);
      this.spinner.hide();
      this.getTeamSponsor(this.teamInfoArr);
      this.getSquadData();
      console.log(this.teamInfoArr);
    });
    
    
  }

  getSquadData() {
    let teamName = this.cs.getTeamName();
    this.manutdService.getTeamDetails(teamName).subscribe(data => {
      //console.log(data);
      this.manutdData.push(data.leagueResponse);
      this.spinner.hide();
    });

  }

   


  getTeamSponsor(val) {

    for (let i=0; i< this.teamJerseyArray.length; i++) {
      if (val[0].teamSponsor === this.teamJerseyArray[i].label) {
        this.teamKitSrc = this.teamJerseyArray[i].teamSponsor;
        this.widthSrc = this.teamJerseyArray[i].width;
        this.heightSrc = this.teamJerseyArray[i].height;
      }
    }
    

    for (let i=0;i< this.teamKitArray.length; i++ ) {
      if (val[0].teamKitSponsor === this.teamKitArray[i].label) {
        this.src = this.teamKitArray[i].teamKit;
        this.widthSponsor = this.teamKitArray[i].width;
        this.heightSponsor = this.teamKitArray[i].height;
      }
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
    } else if (val[0].teamName === 'Liverpool') {
      this.liverpool = true;
    } else if (val[0].teamName === 'Tottenham Hotspur') {
      this.tottenham = true;
    } else if (val[0].teamName === 'Everton') {
      this.everton = true;
    } else if (val[0].teamName === 'Paris Saint-Germain') {
      this.psg = true;
    }
    this.teamManager = val;
  }

  navigateToPrevious() {
    this.route.navigate(['adminHome', 'admin']);
  }

  editTeamInfo() {
    if (this.isEditable === false) {
      this.isEditable = true;
      this.isNonEdit = false;
    }
  }

  closeEdit() {
    this.isEditable = false;
    this.isNonEdit = true;
  }

  updateTeamInfo(val) {
    this.spinner.show();
    console.log(val);
    this.teamname = val.target[0].value;
    let id = this.cs.getleagueId();
    let obj = {
      'id': this.id,
      'teamName': val.target[0].value,
      'manager': val.target[1].value,
      'stadium': val.target[2].value,
      'location': val.target[3].value
    }
    console.log(obj);
    this.manutdService.updateTeamInfo(obj).subscribe(data => {
      console.log(data);
      if (data.appStatus === 0) {
        this.adminSuccess = data.successMessage;
        this.alertSuccess = true;
        setTimeout(() => {
          this.alertSuccess = false;
        }, 5000);
        this.isEditable = false;
        this.isNonEdit = true;
      this.updateLeagueTeamName(this.teamname,id);
      }
      this.spinner.hide();
    })
  }

  updateLeagueTeamName(teamName,id) {
    let obj = {
      "id": id,
      "name": teamName
    }
    this.manutdService.updateTeamName(obj).subscribe(data => {
      console.log(data);
    })
    
  }
  

}
