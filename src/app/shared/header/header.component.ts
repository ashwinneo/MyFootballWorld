import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HeaderServiceService } from './header-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginServiceService } from '../../modules/login/login-service.service';

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
  @Input('leagueList') leagueList;
  constructor(private headerService: HeaderServiceService,
  private spinner: NgxSpinnerService,
  private loginService: LoginServiceService) { }
  leagueArray = [];
  // leagueList = [
  //   {
  //     id: 'Premier League',
  //     name: 'Premier League'
  //   },
  //   {
  //     id: 'Spanish Premier League',
  //     name: 'La Liga (Spanish)'
  //   },
  //   {
  //     id: 'BUNDESLIGA',
  //     name: 'Bundesliga'
  //   },
  //   {
  //     id: 'Indian Super League',
  //     name: 'Indian Super League'
  //   }
  // ];

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
    console.log(this.leagueList);
    console.log(window.localStorage.getItem('emailId'));
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
    console.log(val);
    this.spinner.show();
    let emailId = window.localStorage.getItem('emailId');
    this.headerService.getUserDetails(emailId).subscribe( data=> {
      console.log(data);
      this.spinner.hide();
      this.name = data.leagueResponse.fullName;
      this.email = data.leagueResponse.email;
      this.userName = data.leagueResponse.userName;
      this.address = data.leagueResponse.userDetails.address;
      this.state = data.leagueResponse.userDetails.state;
      this.city = data.leagueResponse.userDetails.city;
      this.zipCode = data.leagueResponse.userDetails.zipcode;
      this.country = data.leagueResponse.userDetails.country;
      this.id = data.leagueResponse.id;
      this.password = data.leagueResponse.password;
    })
    if (val.value === 'Update Profile') {
      
      this.display = 'block';
      this.updateUserFlag = true;
      this.successFlag = false;
      this.confirmPassword = false;
      
    } else if(val.value === 'Update Password') {
      this.display = 'block';
      this.confirmPassword = true;
      this.updateUserFlag = false;
      this.successFlag = false;
    }
  }

  submitPassword(val) {
    this.spinner.show();
    this.oldPassword = val.target[0].value;
    if (this.oldPassword === this.password) {
      //console.log('match');
      let forgotPasswordObj = {
        'id': this.id,
        'password': val.target[1].value,
        'repeatPassword': val.target[2].value
      }
      //console.log(forgotPasswordObj);
      this.loginService.updatePassword(forgotPasswordObj).subscribe(data => {
          if (data.appStatus === 0) {
            this.successMessage = "Password Updated Successfully";
            this.spinner.hide();
            this.successFlag = true;
            this.confirmPassword = false;
            this.updateUserFlag = false;
          }
      })
    } else {
      this.spinner.hide();
      //this.failureMessageFlag = true;
      this.successFlag = false;
      this.updateUserFlag = false;
      this.confirmPassword = false;
      //this.errorMessage = 'Incorrect Old Password';
    }
  }

  closePopup() {
    this.display = 'none';
  }

  updateProfile(val) {

    let userDetailsObj = {
      "id": this.id,
      "fullName" : val.target[0].value,
      "email" : val.target[1].value,
      "userName" : val.target[2].value,
      "address" : val.target[3].value,
      "country" : val.target[4].value,
      "state" : val.target[5].value,      
      "city" : val.target[6].value,
      "zipCode" : val.target[7].value    
    }
    console.log(userDetailsObj);

    this.headerService.updateUserDetails(userDetailsObj).subscribe(data => {
      if (data.appStatus === 0) {
        this.updateUserFlag = false;
        this.successFlag = true;
        this.confirmPassword = false;
        this.successMessage = 'Updated Successfully';
      }
    })

  }
}
