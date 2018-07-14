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
  chart: Chart;
  teamPlayChart: Chart;
  defenseChart: Chart;
  disciplineChart: Chart;
  pieData = [];
  pieTeamPlayData = [];
  pieDefenseData = [];
  pieDisciplineData = [];
  teamManager = [];
  
  ngOnInit() {
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
      this.teamInfoArr = data.teamInfo.leagueResponse;
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
      this.getTeamList(this.manutdData, this.teamInfoArr);
    });

  }

  drawAttackPiechart() {
   let chart = new Chart({
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Attack'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Total',
          data: this.pieData
        }
      ]
    });
    this.chart = chart;
  }
  drawTeamPlayPiechart() {
    let chart2 = new Chart({
       chart: {
         type: 'pie'
       },
       title: {
         text: 'Team Play'
       },
       credits: {
         enabled: false
       },
       series: [
         {
           name: 'Total',
           data: this.pieTeamPlayData
         }
       ]
     });
     this.teamPlayChart = chart2;
   }

   drawDefensePiechart() {
    let chart1 = new Chart({
       chart: {
         type: 'pie'
       },
       title: {
         text: 'Defense'
       },
       credits: {
         enabled: false
       },
       series: [
         {
           name: 'Total',
           data: this.pieDefenseData
         }
       ]
     });
     this.defenseChart = chart1;
   }

   drawDisciplinePiechart() {
    let chart1 = new Chart({
       chart: {
         type: 'pie'
       },
       title: {
         text: 'Discipline'
       },
       credits: {
         enabled: false
       },
       series: [
         {
           name: 'Total',
           data: this.pieDisciplineData
         }
       ]
     });
     this.disciplineChart = chart1;
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

    if (val[0].teamKitSponsor === 'Adidas') {
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
    this.teamManager = val;
  }

  getTeamList(val, teamInfo) {
    if (teamInfo[0].teamName === 'Manchester United') {      
      this.pieData = [
        [
          'Goals',1924,
        ],
        [
          'Goals per match',1.92
        ],
        [
          'Shots',7200
        ],
        [
          'Shots on target',2530
        ],
        [
          'Penalties scored',52
        ],
        [
          'Big chances created',518
        ],
        [
          'Hit woodwork',185
        ]
      ]

      this.pieTeamPlayData = [
        [
          'Passes',234213,
        ],
        [
          'Passes per match',234.21
        ],
        [
          'Crosses',11329
        ]
      ]

      this.pieDefenseData = [
        [
          'Clean Sheets',437
        ],
        [
          'Goals conceded',875
        ],
        [
          'Goals conceded per match',0.88
        ],
        [
          'Saves',501
        ],
        [
          'Tackles',9093
        ],
        [
          'Blocked shots',1885
        ],
        [
          'Interceptions',6609
        ],
        [
          'Clearances',14306
        ],
        [
          'Headed Clearance',5292
        ],
        [
          'Aerial Battles/Duels Won',30106
        ],
        [
          'Errors leading to goal',46
        ],
        [
          'Own goals',35
        ]
      ]

      this.pieDisciplineData = [
        [
          'Yellow cards',1400
        ],
        [
          'Red cards',62
        ],
        [
          'Fouls',1137
        ],
        [
          'Offsides',1097
        ]
      ]
    } else if (teamInfo[0].teamName === 'Chelsea') {
      this.pieData = [
        [
          'Goals',1707,
        ],
        [
          'Goals per match',1.71
        ],
        [
          'Shots',7882
        ],
        [
          'Shots on target',2667
        ],
        [
          'Penalties scored',60
        ],
        [
          'Big chances created',463
        ],
        [
          'Hit woodwork',170
        ]
      ]

      this.pieTeamPlayData = [
        [
          'Passes',228800,
        ],
        [
          'Passes per match',228.80
        ],
        [
          'Crosses',10359
        ]
      ]

      this.pieDefenseData = [
        [
          'Clean Sheets',404
        ],
        [
          'Goals conceded',963
        ],
        [
          'Goals conceded per match',0.96
        ],
        [
          'Saves',475
        ],
        [
          'Tackles',9191
        ],
        [
          'Blocked shots',2068
        ],
        [
          'Interceptions',5971
        ],
        [
          'Clearances',12206
        ],
        [
          'Headed Clearance',4461
        ],
        [
          'Aerial Battles/Duels Won',31366
        ],
        [
          'Errors leading to goal',61
        ],
        [
          'Own goals',34
        ]
      ]

      this.pieDisciplineData = [
        [
          'Yellow cards',1578
        ],
        [
          'Red cards',78
        ],
        [
          'Fouls',977
        ],
        [
          'Offsides',1171
        ]
      ]
    } else if (teamInfo[0].teamName === 'Arsenal') {
      this.pieData = [
        [
          'Goals',1772,
        ],
        [
          'Goals per match',1.77
        ],
        [
          'Shots',7339
        ],
        [
          'Shots on target',2652
        ],
        [
          'Penalties scored',52
        ],
        [
          'Big chances created',618
        ],
        [
          'Hit woodwork',206
        ]
      ]

      this.pieTeamPlayData = [
        [
          'Passes',245685,
        ],
        [
          'Passes per match',245.69
        ],
        [
          'Crosses',10270
        ]
      ]

      this.pieDefenseData = [
        [
          'Clean Sheets',393
        ],
        [
          'Goals conceded',962
        ],
        [
          'Goals conceded per match',0.96
        ],
        [
          'Saves',563
        ],
        [
          'Tackles',9298
        ],
        [
          'Blocked shots',1902
        ],
        [
          'Interceptions',7380
        ],
        [
          'Clearances',12858
        ],
        [
          'Headed Clearance',4551
        ],
        [
          'Aerial Battles/Duels Won',32588
        ],
        [
          'Errors leading to goal',97
        ],
        [
          'Own goals',39
        ]
      ]

      this.pieDisciplineData = [
        [
          'Yellow cards',1474
        ],
        [
          'Red cards',86
        ],
        [
          'Fouls',980
        ],
        [
          'Offsides',1071
        ]
      ]
    } else if (teamInfo[0].teamName === 'Manchester City') {
      this.pieData = [
        [
          'Goals',1279,
        ],
        [
          'Goals per match',1.58
        ],
        [
          'Shots',7175
        ],
        [
          'Shots on target',2502
        ],
        [
          'Penalties scored',65
        ],
        [
          'Big chances created',601
        ],
        [
          'Hit woodwork',178
        ]
      ]

      this.pieTeamPlayData = [
        [
          'Passes',233203,
        ],
        [
          'Passes per match',287.90
        ],
        [
          'Crosses',9515
        ]
      ]

      this.pieDefenseData = [
        [
          'Clean Sheets',257
        ],
        [
          'Goals conceded',952
        ],
        [
          'Goals conceded per match',1.18
        ],
        [
          'Saves',401
        ],
        [
          'Tackles',9288
        ],
        [
          'Blocked shots',1854
        ],
        [
          'Interceptions',6558
        ],
        [
          'Clearances',13277
        ],
        [
          'Headed Clearance',4435
        ],
        [
          'Aerial Battles/Duels Won',30136
        ],
        [
          'Errors leading to goal',56
        ],
        [
          'Own goals',37
        ]
      ]

      this.pieDisciplineData = [
        [
          'Yellow cards',1217
        ],
        [
          'Red cards',65
        ],
        [
          'Fouls',1083
        ],
        [
          'Offsides',1063
        ]
      ]
    } else if (teamInfo[0].teamName === 'Real Madrid') {
    } else if (teamInfo[0].teamName === 'Athletico Madrid') {
    } else if (teamInfo[0].teamName === 'Barcelona') {
    } else if (teamInfo[0].teamName === 'Sevilla') {
    }
    this.getCharts();
  }

  navigateToPrevious() {
    this.route.navigate(['adminHome', 'admin']);
  }

  getCharts() {
    this.drawAttackPiechart();
    this.drawTeamPlayPiechart();
    this.drawDefensePiechart();
    this.drawDisciplinePiechart();
  }

}
