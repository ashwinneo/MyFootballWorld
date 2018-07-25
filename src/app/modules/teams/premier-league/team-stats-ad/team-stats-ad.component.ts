import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-team-stats-ad',
  templateUrl: './team-stats-ad.component.html',
  styleUrls: ['./team-stats-ad.component.css']
})
export class TeamStatsAdComponent implements OnInit {

  @Input("teamInfoArr") teamInfoArr;
  pieData = [];
  pieTeamPlayData = [];
  pieDefenseData = [];
  pieDisciplineData = [];
  chart: Chart;
  defenseChart: Chart;
  constructor() { }

  ngOnInit() {
    this.getTeamList(this.teamInfoArr);
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

  getTeamList(teamInfo) {
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
    } else if (teamInfo[0].teamName === 'Real Madrid') {
    } else if (teamInfo[0].teamName === 'Athletico Madrid') {
    } else if (teamInfo[0].teamName === 'Barcelona') {
    } else if (teamInfo[0].teamName === 'Sevilla') {
    } else if (teamInfo[0].teamName === 'Liverpool') {
      this.pieData = [
        [
          'Goals',1685,
        ],
        [
          'Goals per match',1.69
        ],
        [
          'Shots',7868
        ],
        [
          'Shots on target',2606
        ],
        [
          'Penalties scored',57
        ],
        [
          'Big chances created',500
        ],
        [
          'Hit woodwork',227
        ]
      ]
      this.pieDefenseData = [
        [
          'Clean Sheets',373
        ],
        [
          'Goals conceded',1024
        ],
        [
          'Goals conceded per match',1.02
        ],
        [
          'Saves',422
        ],
        [
          'Tackles',10247
        ],
        [
          'Blocked shots',2006
        ],
        [
          'Interceptions',6148
        ],
        [
          'Clearances',13145
        ],
        [
          'Headed Clearance',4506
        ],
        [
          'Aerial Battles/Duels Won',31913
        ],
        [
          'Errors leading to goal',83
        ],
        [
          'Own goals',39
        ]
      ]

    } else if (teamInfo[0].teamName === 'Tottenham Hotspur') {
      this.pieData = [
        [
          'Goals',1480,
        ],
        [
          'Goals per match',1.48
        ],
        [
          'Shots',7405
        ],
        [
          'Shots on target',2532
        ],
        [
          'Penalties scored',46
        ],
        [
          'Big chances created',477
        ],
        [
          'Hit woodwork',166
        ]
      ]
      this.pieDefenseData = [
        [
          'Clean Sheets',281
        ],
        [
          'Goals conceded',1267
        ],
        [
          'Goals conceded per match',1.27
        ],
        [
          'Saves',507
        ],
        [
          'Tackles',9461
        ],
        [
          'Blocked shots',2014
        ],
        [
          'Interceptions',7028
        ],
        [
          'Clearances',15224
        ],
        [
          'Headed Clearance',5276
        ],
        [
          'Aerial Battles/Duels Won',31864
        ],
        [
          'Errors leading to goal',102
        ],
        [
          'Own goals',33
        ]
      ]

    }
    this.getCharts();
  }

  getCharts() {
    this.drawAttackPiechart();
    this.drawDefensePiechart();
  }
}
