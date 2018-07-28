import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-team-stats-td',
  templateUrl: './team-stats-td.component.html',
  styleUrls: ['./team-stats-td.component.css']
})
export class TeamStatsTdComponent implements OnInit {

  pieTeamPlayData = [];
  pieDisciplineData = [];
  teamPlayChart: Chart;
  disciplineChart: Chart;
  @Input("teamInfoArr") teamInfoArr;
  constructor() { }

  ngOnInit() {
    this.getTeamList(this.teamInfoArr);
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

   getTeamList(teamInfo) {
    if (teamInfo[0].teamName === 'Manchester United') {

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
    } else if (teamInfo[0].teamName === 'Liverpool') {
      this.pieTeamPlayData = [
        [
          'Passes',230879,
        ],
        [
          'Passes per match',230.88
        ],
        [
          'Crosses',10435
        ]
      ]

      this.pieDisciplineData = [
        [
          'Yellow cards',1263
        ],
        [
          'Red cards',56
        ],
        [
          'Fouls',1013
        ],
        [
          'Offsides',1089
        ]
      ]
    } else if (teamInfo[0].teamName === 'Tottenham Hotspur') {
      this.pieTeamPlayData = [
        [
          'Passes',212293,
        ],
        [
          'Passes per match',212.29
        ],
        [
          'Crosses',10306
        ]
      ]

      this.pieDisciplineData = [
        [
          'Yellow cards',1447
        ],
        [
          'Red cards',61
        ],
        [
          'Fouls',1047
        ],
        [
          'Offsides',1078
        ]
      ]
    } else if (teamInfo[0].teamName === 'Everton') {
      this.pieTeamPlayData = [
        [
          'Passes',187182,
        ],
        [
          'Passes per match',187.18
        ],
        [
          'Crosses',10389
        ]
      ]

      this.pieDisciplineData = [
        [
          'Yellow cards',1516
        ],
        [
          'Red cards',89
        ],
        [
          'Fouls',1059
        ],
        [
          'Offsides',1023
        ]
      ]
    } else if (teamInfo[0].teamName === 'Leicester City F.C') {
      this.pieTeamPlayData = [
        [
          'Passes',55584,
        ],
        [
          'Passes per match',120.83
        ],
        [
          'Crosses',3149
        ]
      ]

      this.pieDisciplineData = [
        [
          'Yellow cards',671
        ],
        [
          'Red cards',42
        ],
        [
          'Fouls',860
        ],
        [
          'Offsides',267
        ]
      ]
    }
    this.getCharts();
  }

  getCharts() {
    this.drawTeamPlayPiechart();
    this.drawDisciplinePiechart();
  }

}
