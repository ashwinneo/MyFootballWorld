import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from './admin-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from './admin';
import { HeaderServiceService } from './../../shared/header/header-service.service';
import { CommonServiceService } from './../../core/common-service/common-service.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private adminService: AdminServiceService,
  private spinner: NgxSpinnerService,
  private route: Router,
  private router: ActivatedRoute,
  private headerService: HeaderServiceService,
  private commonService: CommonServiceService) { }
  adminSuccess: String;
  footballList = [];
  id: String;
  createLeagueFlag: boolean;
  p: number = 1;
  key: String = 'name';
  reverse: Boolean = false;
  successFlag: Boolean;
  alertSuccess: Boolean;
  leagueList = [];
  editFlag: Boolean;
  editObj: any;
  deleteFlag: Boolean;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit() {
    //console.log(this.route.url);
    // this.adminService.getAdminDetails().subscribe(data => {
    //   //console.log(data);
    //   this.adminSuccess = data[0].message;
    //   this.alertSuccess = true;
    //   setTimeout(() => {
    //     //console.log('hide');
    //     this.alertSuccess = false;
    //   }, 5000);
    // });
    this.headerService.getLeagueDetails().subscribe(data => {
      this.leagueList = data.leagueResponse;
      //console.log(this.leagueList);
    })

    // let name = this.router.snapshot.paramMap.get('id');
    let name = this.commonService.getLoggedInName();
    this.adminSuccess = 'You have logged in as' + ' ' + name;
    this.alertSuccess = true;
      setTimeout(() => {
        this.alertSuccess = false;
      }, 5000);
    this.fetchList();
  }

  searchName(name) {
    //console.log(name);
    this.footballList = [];
    this.spinner.show();
    this.adminService.getLeagueByName(name).subscribe(data => {
      //console.log(data);
      this.footballList.push(data.leagueResponse);
      this.spinner.hide();
    });
  }

  fetchList() {
    this.spinner.show();
    this.footballList = [];
    this.adminService.getTeamList().subscribe(data => {
      //console.log(data);
      this.spinner.hide();
      this.footballList.push(data.leagueResponse);
      let list = data.leagueResponse;
      // console.log('equal = ',list);
      // console.log('push' , this.footballList);
    });
    // this.router.data.forEach((data: {admin: Admin[] }) => {
    //   this.footballList = data.admin.leagueResponse;
    //   this.spinner.hide();
    //   //console.log(data.admin);
    // });
  }

  modalPopup() {
    this.createLeagueFlag = true;
  }

  closePopup(val) {
    if (val !== undefined) {
    val.name = '';
    val.manager = '';
    val.country = '';
    val.league = '';
  }
  }  

  leagueSelect($event) {
    //console.log($event);
    this.footballList = [];
    this.spinner.show();
    this.adminService.getLeagueById($event).subscribe(data => {
      //console.log(data);
      this.footballList.push(data.leagueResponse);
      this.spinner.hide();
    });
  }
  edit(val) {    
    this.editFlag = true;
    this.editObj = val;
  }
  

  delete(id) {
    this.id = id;
    this.deleteFlag = true;
  }

  teamDetail(val) {
    this.commonService.setTeamName(val);
    this.route.navigate(['/teamInfo']);
    this.commonService.setLoggedIn(true);
  }

  closeCreatePopup(val) {
    if (this.createLeagueFlag == true) {
    this.createLeagueFlag = false;
    } else if(this.editFlag == true) {
      this.editFlag = false;
    } else if(this.deleteFlag == true) {
      this.deleteFlag = false;
    }
  }
}
