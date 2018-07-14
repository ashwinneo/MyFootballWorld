import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-team-squad',
  templateUrl: './team-squad.component.html',
  styleUrls: ['./team-squad.component.css']
})
export class TeamSquadComponent implements OnInit {

  @Input("manutdData") manutdData;
  squadList = [];
  constructor() { }
  
  key: String = 'playerName';
  reverse: Boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit() {
    
    this.squadList = this.manutdData;
    
  }

  
}
