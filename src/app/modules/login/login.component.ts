import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonServiceService } from './../../core/common-service/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService,
  private route: Router,
  private spinner: NgxSpinnerService,
  private commonservice: CommonServiceService) { }
  userName: String;
  password: String;
  id: String;
  pwd: String;
  loginData: String;
  error: String;
  display: String;
  username: String;
  confirmEmail: Boolean;
  emailId: String;
  confirmPassword: Boolean;
  oldPassword: String;
  successMessage: String;
  successMessageFlag: Boolean;
  failureMessageFlag: Boolean;
  errorMessage: String;
  passwordResponse: String;
  loggedInName: String;
  type: String;
  show: Boolean;
  errorFlag: Boolean;
  radio = [
    {
      "label": "YES",
      "value": "Yes"
    },
    {
      "label": "NO",
      "value": "No"
    }
  ]

  ngOnInit() {
    this.type = "password";
    this.show = false;
  }

  toggleShow()
    {
        this.show = !this.show;
        if (this.show){
            this.type = "text";
        }
        else {
            this.type = "password";
        }
    }

  login(event) {
    this.username = event.target[0].value;
    event.preventDefault();
    this.loginService.getUserDetailsByEmailId(this.username).subscribe(data => {
        
    if (data.leagueResponse != undefined && data.appStatus == 0) {
      this.loginData = data.leagueResponse;
      this.id = data.leagueResponse.email;
      this.pwd = data.leagueResponse.password;
      this.loggedInName = data.leagueResponse.fullName;
      window.localStorage.setItem('emailId', data.leagueResponse.email);
      this.navigate(this.id, this.pwd);
    } else {
      this.errorMessage = "Invalid Credentials";
      this.failureMessageFlag = true;
      this.display = 'block';
      this.password = '';
      this.confirmEmail = false;
      this.confirmPassword = false;
      this.successMessageFlag = false;
    }
    
  });
}

navigate(id, pwd){
    if (id === this.userName && pwd === this.password) {
      this.commonservice.setLoggedInName(this.loggedInName);
      this.route.navigate(['/adminHome']);
      this.commonservice.setLoggedIn(true);
    } else {
      this.errorMessage = "Invalid Credentials";
      this.password = '';
      this.spinner.hide();
      this.errorFlag = true;
    }
  }

  signUp() {
    this.route.navigate(['/signUp']);
  }

  openPopup() {
    //this.display = 'block';
    this.confirmEmail = true;
    if (this.confirmPassword === true || this.successMessageFlag === true || this.failureMessageFlag == true) {
      this.confirmPassword = false;
      this.successMessageFlag = false;
      this.failureMessageFlag = false;
    }
  }

  closePopup(val) {
   if (this.confirmEmail === true) {
     this.confirmEmail = val;
   } else if (this.confirmPassword === true) {
     this.confirmPassword = val;
   } else if (this.errorFlag === true) {
     this.errorFlag = false;
   }
  }

  navigateToNet(val) {
    this.confirmPassword = val;
    this.confirmEmail = false;
  }

  getId(val) {
    this.id = val;
  }

  getError(val) {
    this.confirmEmail = false;
    this.errorFlag = true;
  }

  setErrorMessage(val) {
    this.errorMessage = val;
    console.log(this.errorMessage);
  }

}


