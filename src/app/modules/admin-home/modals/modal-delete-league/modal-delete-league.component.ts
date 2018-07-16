import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AdminServiceService } from './../../admin-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-delete-league',
  templateUrl: './modal-delete-league.component.html',
  styleUrls: ['./modal-delete-league.component.css']
})
export class ModalDeleteLeagueComponent implements OnInit {

  display: String;
  deleteLeagueFlag: Boolean;
  successFlag: Boolean;
  constructor(private adminService: AdminServiceService,
    private spinner: NgxSpinnerService,
    private route: Router) { }
  @Output() close = new EventEmitter<any>();
  @Output() fetchList = new EventEmitter<any>();
  @Input("id") id;
  ngOnInit() {
    this.display ='block';
    this.deleteLeagueFlag = true;
    console.log(this.id);
  }

  closePopup() {    
  this.close.emit(false);
  }

  deleteLeague() {
    this.spinner.show();
    this.adminService.deleteLeague(this.id).subscribe(data => {
      //console.log(data);
      this.spinner.hide();
      this.deleteLeagueFlag = false;
      this.successFlag = true;
    });

  }
  goToLeagueList() {
    this.successFlag = false;
    this.close.emit(false);
    this.fetchList.emit();
  }

}
