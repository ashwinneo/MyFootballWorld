import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeaderServiceService } from './../header-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginServiceService } from './../../../modules/login/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-update-password',
  templateUrl: './modal-update-password.component.html',
  styleUrls: ['./modal-update-password.component.css']
})
export class ModalUpdatePasswordComponent implements OnInit {

  display: String;
  oldPassword: String;
  ID: String;
  successMessage: String;
  successFlag: Boolean;
  confirmPassword: Boolean;
  failureFlag: Boolean;
  @Input("id") id;
  @Input("password") password;
  @Output() close = new EventEmitter<any>();
  constructor(private headerService: HeaderServiceService,
    private spinner: NgxSpinnerService,
    private loginService: LoginServiceService,
    private route: Router) { }

  ngOnInit() {
    this.ID = this.id;
    this.display = 'block';
    this.confirmPassword = true;
  }

  submitPassword(val) {
    this.spinner.show();
    this.oldPassword = val.target[0].value;
    if (this.oldPassword === this.password) {
      //console.log('match');
      let forgotPasswordObj = {
        'id': this.ID,
        'password': val.target[1].value,
        'repeatPassword': val.target[2].value
      }
      //console.log(forgotPasswordObj);
      this.loginService.updatePassword(forgotPasswordObj).subscribe(data => {
          if (data.appStatus === 0) {
            this.successMessage = "Password Updated Successfully";
            this.spinner.hide();
            this.confirmPassword = false;
            this.failureFlag = false;
            this.successFlag = true;
          }
      })
    } else {
      this.spinner.hide();
      this.successMessage = "Password donot Match";
      this.successFlag = false;
      this.confirmPassword = false;
      this.failureFlag = true;
      //this.errorMessage = 'Incorrect Old Password';
    }
  }

  closePopup() {
    this.close.emit(false);
  }

}
