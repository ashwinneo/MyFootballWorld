import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AdminServiceService } from './../../admin-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-edit-league',
  templateUrl: './modal-edit-league.component.html',
  styleUrls: ['./modal-edit-league.component.css']
})
export class ModalEditLeagueComponent implements OnInit {

  league1 = {};
  name1: String;
  manager1: String;
  country1: String;
  league2: String;
  display: String;
  editLeagueFlag: Boolean;
  successFlag: Boolean;
  status: String;
  constructor(private adminService: AdminServiceService,
    private spinner: NgxSpinnerService,
    private route: Router) { }
    @Input("editObj") editObj;
  @Output() fetchList = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();
  ngOnInit() {
    this.name1 = this.editObj.name;
    this.manager1 = this.editObj.manager;
    this.country1 = this.editObj.country;
    this.league2 = this.editObj.league;
    this.display = 'block';
    this.editLeagueFlag = true;
  }
  updateLeague(val) {
    this.spinner.show();
    //console.log(val);
    let leagueObj = {
      'id': this.editObj.id,
      'name': val.target[0].value,
      'manager': val.target[1].value,
      'country': val.target[2].value,
      'league': val.target[3].value

    };
    this.adminService.updateLeague(leagueObj).subscribe(data => {
      //console.log(data);
      this.editLeagueFlag = false;
      this.successFlag = true;
      this.status = 'Updated';
      this.spinner.hide();
    });
  }
  closeEditPopup() {
    this.close.emit(false);
  }

  goToLeagueList() {
    this.successFlag = false;
    this.close.emit(false);
    this.fetchList.emit();
  }
}
