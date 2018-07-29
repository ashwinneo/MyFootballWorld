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
  @Input("teamPlayDiscipline") teamPlayDiscipline;
  constructor() { }

  ngOnInit() {
    console.log(this.teamPlayDiscipline);
    this.getTeamList(this.teamPlayDiscipline);
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

   getTeamList(val) {
    this.pieTeamPlayData = [
          [
            'Passes',val.passes,
          ],
          [
            'Passes per match',val.passesPerMatch
          ],
          [
            'Crosses',val.crosses
          ]
        ]
  
        this.pieDisciplineData = [
          [
            'Yellow cards',val.yellowCards
          ],
          [
            'Red cards',val.redCards
          ],
          [
            'Fouls',val.foul
          ],
          [
            'Offsides',val.offsides
          ]
        ]
    
    this.getCharts();
  }

  getCharts() {
    this.drawTeamPlayPiechart();
    this.drawDisciplinePiechart();
  }

}
