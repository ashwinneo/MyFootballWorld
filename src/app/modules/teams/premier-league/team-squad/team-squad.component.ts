import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { ExportServiceService } from '../../../../core/common-service/export-service.service';

@Component({
  selector: 'app-team-squad',
  templateUrl: './team-squad.component.html',
  styleUrls: ['./team-squad.component.css']
})
export class TeamSquadComponent implements OnInit {

  @Input("manutdData") manutdData;
  squadList = [];
  constructor(private exportService: ExportServiceService) { }
  
  key: String = 'playerName';
  reverse: Boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit() {
    
    this.squadList = this.manutdData;
    
  }

  export() {
    this.exportService.exportAsExcelFile(this.squadList[0], this.squadList[0][0].teamName);
  }

  
}
