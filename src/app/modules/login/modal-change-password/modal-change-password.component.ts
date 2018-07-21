import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { LoginServiceService } from './../login-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonServiceService } from './../../../core/common-service/common-service.service';

@Component({
  selector: 'app-modal-change-password',
  templateUrl: './modal-change-password.component.html',
  styleUrls: ['./modal-change-password.component.css']
})
export class ModalChangePasswordComponent implements OnInit {

  display: String;
  @Output() close = new EventEmitter<any>();
  @Output() success = new EventEmitter<any>();
  @Output() successFlag = new EventEmitter<any>();
  @Input("id") id;
  successMessage: String;
  constructor(private loginService: LoginServiceService,
    private route: Router,
    private spinner: NgxSpinnerService,
    private commonservice: CommonServiceService) { }

  ngOnInit() {
    this.display = 'block';
  }

  closePopup() {
    this.close.emit(false);
  }

  submitPassword(val) {
    this.spinner.show();
      let forgotPasswordObj = {
        'id': this.id,
        'password': val.target[0].value,
        'repeatPassword': val.target[1].value
      }
      this.loginService.updatePassword(forgotPasswordObj).subscribe(data => {
          if (data.appStatus === 0) {
            this.successMessage = data.successMessage;
            this.spinner.hide();
            this.successFlag.emit(true);
            this.success.emit(this.successMessage);
            // this.successMessageFlag = true;
            // this.confirmEmail = false;
            // this.confirmPassword = false;
            // this.failureMessageFlag = false;
          }
      })
    // } else {
    //   this.spinner.hide();
    //   this.failureMessageFlag = true;
    //   this.successMessageFlag = false;
    //   this.confirmEmail = false;
    //   this.confirmPassword = false;
    //   this.errorMessage = 'Incorrect Old Password';
    // }
  }

}
