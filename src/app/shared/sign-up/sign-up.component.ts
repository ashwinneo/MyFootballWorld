import { Component, OnInit } from '@angular/core';
import { SignUpServiceService } from './sign-up-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name: String;
  fullName: String;
  email: String;
  emailId: String;
  username: String;
  userName: String;
  pass: String;
  password: String;
  repeatpass: String;
  repeatPassword: String;
  isChecked: any;
  checked: any;
  passwordFlag: Boolean;
  error: String;
  isDisabled: Boolean;
  display: String;
  successMessage: String;
  constructor(private signUpService: SignUpServiceService,
  private router: Router) { }

  ngOnInit() {
    this.isDisabled = true;
  }

  setFullName(val) {
    this.fullName = val;
    console.log(this.fullName);
  }

  setEmail(val) {
    this.emailId = val;
    console.log(this.emailId);
  }

  setUserName(val) {
    this.userName = val;
    console.log(this.userName);
  }

  setPassword(val) {
    this.password = val;
    console.log(this.password);
  }

  setRepeatPassword(val) {
    this.repeatPassword = val;
    console.log(this.repeatPassword);
    if (this.password === this.repeatPassword) {
      this.passwordFlag = false;
      this.isDisabled = false;
    } else {
      this.passwordFlag = true;
      this.error = 'Passwords did not match';
    }
  }

  setChecked(val) {
    this.checked = val;
    this.isDisabled = false;
    console.log(this.checked);
  }

  register($event) {
    console.log($event);
    if (this.passwordFlag === false && this.checked === true) {
    let registerObj = {
      'fullName': $event.target[0].value,
      'email': $event.target[1].value,
      'userName': $event.target[2].value,
      'password': $event.target[3].value,
      'repeatPassword': $event.target[4].value
    }
    this.signUpService.registerAccount(registerObj).subscribe(data => {
      console.log(data);
      this.display = 'block';
      this.successMessage = data.leagueResponse;
      this.router.navigate(['/login']);
    });
  } else {
    this.isDisabled = true;
    this.error = 'Please Confirm Before You Register';
  }
  }

  closePopup() {
    this.display = 'none';
  }

  confirm() {
    this.display = 'none';
    this.router.navigate(['/login']);
  }
}
