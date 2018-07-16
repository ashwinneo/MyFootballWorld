import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminServiceService } from './../../admin-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-add-league',
  templateUrl: './modal-add-league.component.html',
  styleUrls: ['./modal-add-league.component.css']
})
export class ModalAddLeagueComponent implements OnInit {

  display: String;
  league = {};
  createLeagueFlag: Boolean;
  successFlag: Boolean;
  status: String;
  @Output() close = new EventEmitter<any>();
  @Output() fetchList = new EventEmitter<any>();
  constructor(private adminService: AdminServiceService,
    private spinner: NgxSpinnerService,
    private route: Router) { }

  ngOnInit() {
    this.display = 'block';
    this.createLeagueFlag = true;
  }

  closePopup(val) {
    if (val !== undefined) {
    val.name = '';
    val.manager = '';
    val.country = '';
    val.league = '';
  }
  this.close.emit(false);
  this.display = 'none';
}

createLeague(val) {
  this.spinner.show();
  //console.log(val);
  let leagueObj = {
    'name': val.name,
    'manager': val.manager,
    'country': val.country,
    'league': val.league

  };
  this.adminService.createLeague(leagueObj).subscribe(data => {
    //console.log(data);
    this.spinner.hide();
    if (val !== undefined) {
      val.name = '';
      val.manager = '';
      val.country = '';
      val.league = '';
    }
    this.successFlag = true;
    this.createLeagueFlag = false;
    this.status = "Created";
  });
}

goToLeagueList() {
  this.successFlag = false;
  this.close.emit(false);
  this.fetchList.emit();
}

}
