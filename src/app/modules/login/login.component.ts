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
  ngOnInit() {
  }

  login(event) {
    console.log(this.userName, this.password);
    event.preventDefault();
    this.loginService.getUserDetails().subscribe(data =>{
    console.log(data);
    this.loginData = data;
    this.id = data[0].id;
    this.pwd = data[0].password;
    this.navigate(this.id, this.pwd);
  });
}

navigate(id, pwd){
    if(id === this.userName && pwd === this.password) {
      this.route.navigate(['/adminHome', id]);
      this.loginService.setLoggedIn(true);
    } else {
      this.error = 'Invalid Credentials';
    }
  }
}


