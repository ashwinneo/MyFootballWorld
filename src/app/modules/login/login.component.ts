import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService,
  private route: Router) { }
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
  ngOnInit() {
  }

  login(event) {
    //console.log(this.userName, this.password);
    //console.log(event);
    this.username = event.target[0].value;
    event.preventDefault();
    this.loginService.getUserDetails(this.username).subscribe(data => {
    //console.log(data);
    this.loginData = data.leagueResponse;
    this.id = data.leagueResponse[0].userName;
    this.pwd = data.leagueResponse[0].password;
    this.navigate(this.id, this.pwd);
  });
}

navigate(id, pwd){
    if (id === this.userName && pwd === this.password) {
      this.route.navigate(['/adminHome', id]);
      this.loginService.setLoggedIn(true);
    } else {
      this.error = 'Invalid Credentials';
    }
  }

  signUp() {
    this.route.navigate(['/signUp']);
  }

  openPopup() {
    this.display = 'block';
    this.confirmEmail = true;
    if (this.confirmPassword === true || this.successMessageFlag === true || this.failureMessageFlag == true) {
      this.confirmPassword = false;
      this.successMessageFlag = false ;
      this.failureMessageFlag = false;
    }
  }

  closePopup() {
    this.display = 'none';
  }

  submit12(val) {
    //console.log(val);
    this.emailId = val.target[0].value;

    this.loginService.getUserDetailsByEmailId(this.emailId).subscribe(data => {
      if (data.appStatus == 0) {
        if(data.leagueResponse.length === 0) {
          this.errorMessage = "Invalid EmailId!"
          this.failureMessageFlag = true;
          this.successMessageFlag = false;
          this.confirmEmail = false;
          this.confirmPassword = false;
        } else {
        this.confirmEmail = false;
        this.confirmPassword = true;
        this.successMessageFlag = false;
        this.failureMessageFlag = false;
        this.passwordResponse = data.leagueResponse[0].password;
        this.id = data.leagueResponse[0].id;
      }
      }
    })

  }

  submitPassword(val) {
    this.oldPassword = val.target[0].value;
    if (this.oldPassword === this.passwordResponse) {
      //console.log('match');
      let forgotPasswordObj = {
        'id': this.id,
        'password': val.target[1].value,
        'repeatPassword': val.target[2].value
      }
      //console.log(forgotPasswordObj);
      this.loginService.updatePassword(forgotPasswordObj).subscribe(data => {
          if (data.appStatus === 0) {
            this.successMessage = data.successMessage;
            this.successMessageFlag = true;
            this.confirmEmail = false;
            this.confirmPassword = false;
            this.failureMessageFlag = false;
          }
      })
    } else {
      this.failureMessageFlag = true;
      this.successMessageFlag = false;
      this.confirmEmail = false;
      this.confirmPassword = false;
      this.errorMessage = 'Incorrect Old Password';
    }
  }
}


