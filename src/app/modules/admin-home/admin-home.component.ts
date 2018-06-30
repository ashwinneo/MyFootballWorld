import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from './admin-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from './admin';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private adminService: AdminServiceService,
  private spinner: NgxSpinnerService,
  private route: Router,
  private router: ActivatedRoute) { }
  adminSuccess: String;
  footballList = [];
  footballLeague: String;
  display: any;
  display1: any;
  league = {};
  league1 = {};
  name1: String;
  manager1: String;
  country1: String;
  league2: String;
  leagueObj = {};
  id: String;
  createLeagueFlag: boolean;
  deleteLeagueFlag: boolean;
  searchText: String;
  type: String;
  p: number = 1;
  key: String = 'name';
  reverse: Boolean = false;
  successFlag: Boolean;
  status: String;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit() {
    //console.log(this.route.url);
    this.adminService.getAdminDetails().subscribe(data => {
      //console.log(data);
      this.adminSuccess = data[0].message;
      setTimeout(() => {
        //console.log('hide');
        this.adminSuccess = '';
      }, 5000);
    });
    this.fetchList();
  }

  searchName(name) {
    //console.log(name);
    this.spinner.show();
    this.adminService.getLeagueByName(name).subscribe(data => {
      //console.log(data);
      this.footballList = data.leagueResponse;
      this.spinner.hide();
    });
  }

  fetchList() {
    this.spinner.show();
    this.adminService.getTeamList().subscribe(data => {
      //console.log(data);
      this.spinner.hide();
      this.footballList = data.leagueResponse;
    });
    // this.router.data.forEach((data: {admin: Admin[] }) => {
    //   this.footballList = data.admin.leagueResponse;
    //   this.spinner.hide();
    //   //console.log(data.admin);
    // });
  }

  modalPopup() {
    this.display = 'block';
    this.type = 'Create';
    this.deleteLeagueFlag = false;
    this.createLeagueFlag = true;
    this.successFlag = false;
  }

  closePopup(val) {
    if (val !== undefined) {
    val.name = '';
    val.manager = '';
    val.country = '';
    val.league = '';
  }
    this.display = 'none';
  }

  closeEditPopup() {
    this.display1 = 'none';
  }

  createLeague(val) {
    this.spinner.show();
    //console.log(val);
    this.leagueObj = {
      'name': val.name,
      'manager': val.manager,
      'country': val.country,
      'league': val.league

    };
    this.adminService.createLeague(this.leagueObj).subscribe(data => {
      //console.log(data);
      this.display = 'block';
      this.successFlag = true;
      this.deleteLeagueFlag = false;
      this.createLeagueFlag = false;
      this.status = 'Created';
      this.spinner.hide();
      if (val !== undefined) {
        val.name = '';
        val.manager = '';
        val.country = '';
        val.league = '';
      }
      this.fetchList();
    });
  }

  leagueSelect($event) {
    //console.log($event);
    this.spinner.show();
    this.adminService.getLeagueById($event).subscribe(data => {
      //console.log(data);
      this.footballList = data.leagueResponse;
      this.spinner.hide();
    });
  }
  edit(val) {

    //console.log(val);
    this.name1 = val.name;
    this.manager1 = val.manager;
    this.country1 = val.country;
    this.league2 = val.league;
    this.id = val.id;
    this.display1 = 'block';
  }
  updateLeague(val) {
    this.spinner.show();
    //console.log(val);
    this.leagueObj = {
      'id': this.id,
      'name': val.target[0].value,
      'manager': val.target[1].value,
      'country': val.target[2].value,
      'league': val.target[3].value

    };
    this.adminService.updateLeague(this.leagueObj).subscribe(data => {
      //console.log(data);
      this.spinner.hide();
      this.fetchList();
      this.display1 = 'none';
    });
  }

  delete(id) {
    this.id = id;
    this.deleteLeagueFlag = true;
    this.type = 'Delete';
    this.createLeagueFlag = false;
    this.successFlag = false;
    this.display = 'block';
  }

  deleteLeague() {
    this.spinner.show();
    this.adminService.deleteLeague(this.id).subscribe(data => {
      //console.log(data);
      this.spinner.hide();
      this.display = 'block';
      this.successFlag = true;
      this.deleteLeagueFlag = false;
      this.createLeagueFlag = false;
      this.status = 'Deleted';
      this.fetchList();
      // this.footballList = data.leagueResponse;
    });

  }

  teamDetail(val) {
    this.route.navigate(['/teamInfo', val]);
  }
}
