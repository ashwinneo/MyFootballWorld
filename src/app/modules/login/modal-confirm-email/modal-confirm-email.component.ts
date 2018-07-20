import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginServiceService } from './../login-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonServiceService } from './../../../core/common-service/common-service.service';

@Component({
  selector: 'app-modal-confirm-email',
  templateUrl: './modal-confirm-email.component.html',
  styleUrls: ['./modal-confirm-email.component.css']
})
export class ModalConfirmEmailComponent implements OnInit {

  display: String;
  emailId: String;
  passwordResponse: String;
  id: String;
  errorMessage: String;
  constructor(private loginService: LoginServiceService,
    private route: Router,
    private spinner: NgxSpinnerService,
    private commonservice: CommonServiceService) { }
    @Output() close = new EventEmitter<any>();
    @Output() nextScreen = new EventEmitter<any>();
    @Output() emitId = new EventEmitter<any>();
    @Output() error = new EventEmitter<any>();
    @Output() errorText = new EventEmitter<any>();
  ngOnInit() {
    this.display = 'block';
  }

  submit12(val) {
    this.spinner.show();
    this.emailId = val.target[0].value;

    this.loginService.getUserDetailsByEmailId(this.emailId).subscribe(data => {
      if (data.appStatus == 1) {
          this.errorMessage = "Invalid EmailId!"
          this.spinner.hide();
          this.error.emit(true);
          this.errorText.emit(this.errorMessage);
          //this.failureMessageFlag = true;
          //this.successMessageFlag = false;
          //this.confirmEmail = false;
          //this.confirmPassword = false;
        } else {
        this.spinner.hide();
        this.nextScreen.emit(true);
        this.passwordResponse = data.leagueResponse.password;
        this.id = data.leagueResponse.id;
        this.emitId.emit(this.id);
      }
      })
    

  }

  closePopup() {
    this.close.emit(false);
  }

}
