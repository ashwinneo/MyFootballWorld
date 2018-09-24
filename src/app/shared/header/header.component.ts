import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HeaderServiceService } from './header-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginServiceService } from '../../modules/login/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: String;
  email: String;
  userName: String;
  address: String;
  state: String;
  city: String;
  zipCode: String;
  display: String;
  country: String;
  password: String;
  oldPassword: String;
  id: String;
  updateUserFlag: Boolean;
  successFlag: Boolean;
  successMessage: String;
  confirmPassword: Boolean;
  userList =  [];
  @Input('leagueList') leagueList;
  constructor(private headerService: HeaderServiceService,
  private spinner: NgxSpinnerService,
  private loginService: LoginServiceService,
  private route: Router) { }
  leagueArray = [];

  profileArray = [
    {
      'id': 'PROFILE',
      'value': 'Update Profile'
    },
    {
      'id': 'UPDATE_PASSWORD',
      'value': 'Update Password'
    },
    {
      'id': 'ABOUT',
      'value': 'About'
    }
  ]
  footballLeague: String;
  @Output() league = new EventEmitter<any>();
  @Output() searchText = new EventEmitter<any>();
  ngOnInit() {
    this.footballLeague = '';
    this.leagueArray = this.leagueList;
    // console.log(this.leagueList);
    // console.log(window.localStorage.getItem('emailId'));
  }

  leagueSelect(league) {
    //console.log(league);
    this.league.emit(league);
  }

  searchName(val) {
    //console.log(val.target[0].value);
    this.searchText.emit(val.target[0].value);
  }

  selectedOption(val) {
    //console.log(val);
    this.spinner.show();
    let emailId = window.localStorage.getItem('emailId');
    this.headerService.getUserDetails(emailId).subscribe( data=> {
      //console.log(data);
      this.spinner.hide();
      this.userList = data.leagueResponse;
      this.name = data.leagueResponse.fullName;
      this.email = data.leagueResponse.email;
      this.userName = data.leagueResponse.userName;
      this.address = data.leagueResponse.address;
      this.state = data.leagueResponse.state;
      this.city = data.leagueResponse.city;
      this.zipCode = data.leagueResponse.zipCode;
      this.country = data.leagueResponse.country;
      this.id = data.leagueResponse.id;
      this.password = data.leagueResponse.password;
      if (val.value === 'Update Profile') {
        this.updateUserFlag = true;        
      } else if(val.value === 'Update Password' && this.id != undefined && this.password != undefined ) {
        this.confirmPassword = true;
        this.spinner.hide();
      } else if (val.value === 'About') {
        this.route.navigate(['aboutUs']);
      }
    })
   
  }

  navigateTo() {
    this.route.navigate['/adminHome'];
  }

  closePopup(val) {
    if (this.confirmPassword === true) {
      this.confirmPassword = val;
    } else if (this.updateUserFlag === true) {
      this.updateUserFlag = val;
    }
  }

  
}
