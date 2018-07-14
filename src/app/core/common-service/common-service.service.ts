import { Injectable } from '@angular/core';

@Injectable()
export class CommonServiceService {

  name: String;
  teamName: String;
  loggedInStatus = false;
  constructor() { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    window.localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  setLoggedInName(val) {
    this.name = val;
  }

  getLoggedInName() {
    return this.name;
  }

  setTeamName(name) {
    this.teamName = name;
  }

  getTeamName() {
    return this.teamName;
  }
}


