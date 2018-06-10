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
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit() {
    this.adminService.getAdminDetails().subscribe(data =>{
      console.log(data);
      this.adminSuccess = data[0].message;
    });
    this.fetchList();
  }

  searchName(name) {
    console.log(name);
    this.adminService.getLeagueByName(name).subscribe(data => {
      console.log(data);
      this.footballList = data.leagueResponse;
    });
  }

  fetchList() {
    this.spinner.show();
    this.adminService.getTeamList().subscribe(data => {
      console.log(data);
      this.spinner.hide();
      this.footballList = data.leagueResponse;
    });
    // this.router.data.forEach((data: {admin: Admin[] }) => {
    //   this.footballList = data.admin.leagueResponse;
    //   this.spinner.hide();
    //   console.log(data.admin);
    // });
  }

  modalPopup() {
    this.display = 'block';
    this.type = 'Create';
    this.deleteLeagueFlag = false;
    this.createLeagueFlag = true;
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
    console.log(val);
    this.leagueObj = {
      'name': val.name,
      'manager': val.manager,
      'country': val.country,
      'league': val.league

    };
    this.adminService.createLeague(this.leagueObj).subscribe(data => {
      console.log(data);
      this.display = 'none';
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
    console.log($event);
    this.adminService.getLeagueById($event).subscribe(data => {
      console.log(data);
      this.footballList = data.leagueResponse;
    });
  }
  edit(val) {

    console.log(val);
    this.name1 = val.name;
    this.manager1 = val.manager;
    this.country1 = val.country;
    this.league2 = val.league;
    this.id = val.id;
    this.display1 = 'block';
  }
  updateLeague(val) {
    this.spinner.show();
    console.log(val);
    this.leagueObj = {
      'id': this.id,
      'name': val.target[0].value,
      'manager': val.target[1].value,
      'country': val.target[2].value,
      'league': val.target[3].value

    };
    this.adminService.updateLeague(this.leagueObj).subscribe(data => {
      console.log(data);
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
    this.display = 'block';
  }

  deleteLeague() {
    this.spinner.show();
    this.adminService.deleteLeague(this.id).subscribe(data => {
      console.log(data);
      this.spinner.hide();
      this.display = 'none';
      this.fetchList();
      // this.footballList = data.leagueResponse;
    });

  }

  teamDetail(val) {
    this.route.navigate(['/teamInfo', val]);
  }
}
