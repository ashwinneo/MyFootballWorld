import { Component, OnInit } from '@angular/core';
import { SignUpServiceService } from './sign-up-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
  successMessageFlag: Boolean;
  repeatPasswordFlag: Boolean;
  errorLength: String;
  errorSpecialChar: String;
  errorNumber:String;
  passwordDetailFlag: Boolean;
  emailFlag: Boolean;
  emailErrorFlag: Boolean;
  repeatPasswordDetailFlag: Boolean;
  constructor(private signUpService: SignUpServiceService,
  private router: Router,
  private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.isDisabled = true;
  }

  setFullName(val) {
    this.fullName = val;
    //console.log(this.fullName);
  }

  setEmail(val) {
    this.emailId = val;
    this.errorLength = '';
    this.emailErrorFlag = false;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //console.log(this.emailId);
    if (this.emailId != '') {
    if (!val.match(emailPattern)) {
      this.emailErrorFlag = true;
      this.errorLength = 'Invalid Email Id';
    } else {
      this.errorLength = '';
    }
  }

    if (this.errorLength === '') {
      this.emailErrorFlag = false;
    }

  }

  setUserName(val) {
    this.userName = val;
    //console.log(this.userName);
  }

  setPassword(val) {
    this.password = val;
    this.errorLength = '';
    this.errorSpecialChar = '';
    this.errorNumber = '';
    this.repeatPasswordFlag = false;
    let specialCharactersformat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let numberFormat = /[0-9]+/;
    if (this.password != '') {
    if (this.password.length < 8) {
      this.repeatPasswordFlag = true;
      this.errorLength = 'Password should me minimum of 8 characters.';
    } else {
      this.errorLength = '';
    }
    if (!val.match(specialCharactersformat)) {
      this.repeatPasswordFlag = true;
      this.errorSpecialChar = 'It should contain atleast one Special Character';
    } else {
      this.errorSpecialChar = '';
    }
    if (!val.match(numberFormat)) {
      this.repeatPasswordFlag = true;
      this.errorNumber = 'It should contain atleast one Number';
    } else {
      this.errorNumber = '';
    }
  }

    if (this.errorLength === '' && this.errorSpecialChar === '' && this.errorNumber === '') {
      this.repeatPasswordFlag = false;
    }
    //console.log(this.password);
  }

  showDetail(val) {
    if (val === 'password') {
    this.passwordDetailFlag = true;
    setTimeout(() => {
      //console.log('hide');
      this.passwordDetailFlag = false;
    }, 5000);
  } else if(val === 'email') {
    this.emailFlag = true;
    setTimeout(() => {
      //console.log('hide');
      this.emailFlag = false;
    }, 5000);
  } else if (val === 'repeatPassword') {
    this.repeatPasswordDetailFlag = true;
    setTimeout(() => {
      //console.log('hide');
      this.repeatPasswordDetailFlag = false;
    }, 5000);
  }
  }

  setRepeatPassword(val) {
    this.repeatPassword = val;
    //console.log(this.repeatPassword);
    if (this.repeatPassword != '') {
    if (this.password === this.repeatPassword) {
      this.passwordFlag = false;
      this.isDisabled = false;
    } else {
      this.passwordFlag = true;
      this.errorLength = 'Passwords do not match';
    }
  }

  }

  setChecked(val) {
    this.checked = val;
    this.isDisabled = false;
    //console.log(this.checked);
  }

  register($event) {
    this.spinner.show();
    //console.log($event);
    if (this.passwordFlag === false && this.checked === true) {
    let registerObj = {
      'fullName': $event.target[0].value,
      'email': $event.target[1].value,
      'userName': $event.target[2].value,
      'password': $event.target[3].value,
      'repeatPassword': $event.target[4].value
    }
    this.signUpService.registerAccount(registerObj).subscribe(data => {
      //console.log(data);
      this.display = 'block';
      this.spinner.hide();
      this.successMessage = data.successMessage;
      this.successMessageFlag = true;
      //this.router.navigate(['/login']);
    });
  } else {
    this.isDisabled = true;
    this.spinner.hide();
    this.error = 'Please Confirm Before You Register';
  }
  }

  closePopup() {
    this.display = 'none';
    this.router.navigate(['/login']);
  }

  confirm() {
    this.display = 'none';
    this.router.navigate(['/login']);
  }
}
