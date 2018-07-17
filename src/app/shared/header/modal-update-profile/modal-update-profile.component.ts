import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HeaderServiceService } from './../header-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginServiceService } from './../../../modules/login/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-update-profile',
  templateUrl: './modal-update-profile.component.html',
  styleUrls: ['./modal-update-profile.component.css']
})
export class ModalUpdateProfileComponent implements OnInit {

  updateUserFlag: Boolean;
  display: String;
  name: String;
  email: String;
  userName: String;
  address: String;
  state: String;
  city: String;
  zipCode: String;
  country: String;
  password: String;
  id: String;
  successFlag: Boolean;
  successMessage: String;
  @Input("userList") userList;
  constructor(private headerService: HeaderServiceService,
    private spinner: NgxSpinnerService,
    private loginService: LoginServiceService,
    private route: Router) { }
  @Output() close = new EventEmitter<any>();
  ngOnInit() {
    this.display = 'block';
    this.updateUserFlag = true;
    console.log(this.userList);
    this.name = this.userList.fullName;
      this.email = this.userList.email;
      this.userName = this.userList.userName;
      this.address = this.userList.userDetails.address;
      this.state = this.userList.userDetails.state;
      this.city = this.userList.userDetails.city;
      this.zipCode = this.userList.userDetails.zipcode;
      this.country = this.userList.userDetails.country;
      this.id = this.userList.id;
      this.password = this.userList.password;
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
        this.successMessage = 'Updated Successfully';
      }
    })

  }

  closePopup() {
  //   if (val !== undefined) {
  //   val.name = '';
  //   val.manager = '';
  //   val.country = '';
  //   val.league = '';
  // }
    this.close.emit(false);
}

}
