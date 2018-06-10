import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  leagueList = [
    {
      id: 'Premier League',
      name: 'Premier League'
    },
    {
      id: 'Spanish Premier League',
      name: 'La Liga (Spanish)'
    },
    {
      id: 'BUNDESLIGA',
      name: 'Bundesliga'
    },
    {
      id: 'Indian Super League',
      name: 'Indian Super League'
    }
  ];
  footballLeague: String;
  @Output() league = new EventEmitter<any>();
  @Output() searchText = new EventEmitter<any>();
  ngOnInit() {
  }

  leagueSelect(league) {
    console.log(league);
    this.league.emit(league);
  }

  searchName(val) {
    console.log(val.target[0].value);
    this.searchText.emit(val.target[0].value);
  }
}
