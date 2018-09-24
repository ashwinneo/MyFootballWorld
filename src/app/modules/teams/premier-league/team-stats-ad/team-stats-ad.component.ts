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
  attackChart: Chart;
  defenseChart: Chart;
  constructor() { }

  ngOnInit() {
    console.log(this.teamInfoArr);
    this.getTeamList(this.teamInfoArr[0]);
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
     this.attackChart = chart;
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

  getTeamList(val) {
    this.pieData = [
          [
            'Goals',val.totalGoals,
          ],
          [
            'Goals per match',val.goalsPerMatch
          ],
          [
            'Shots',val.shots
          ],
          [
            'Shots on target',val.shotsOnTarget
          ],
          [
            'Penalties scored',val.penaltiesScored
          ],
          [
            'Big chances created',val.bigChancesCreated
          ],
          [
            'Hit woodwork',val.hitWoodWork
          ]
        ]
        this.pieDefenseData = [
          [
            'Clean Sheets',val.cleanSheets
          ],
          [
            'Goals conceded',val.goalsConceded
          ],
          [
            'Goals conceded per match',val.goalsConcededPerMatch
          ],
          [
            'Saves',val.saves
          ],
          [
            'Tackles',val.tackles
          ],
          [
            'Blocked shots',val.blockedShots
          ],
          [
            'Interceptions',val.interceptions
          ],
          [
            'Clearances',val.clearances
          ],
          [
            'Headed Clearance',val.headedClearances
          ],
          [
            'Aerial Battles/Duels Won',val.areilBattlesWon
          ],
          [
            'Errors leading to goal',val.errorsLeadingtoGoal
          ],
          [
            'Own goals',val.ownGoals
          ]
        ]
    this.getCharts();
  }

  getCharts() {
    this.drawAttackPiechart();
    this.drawDefensePiechart();
  }
}
