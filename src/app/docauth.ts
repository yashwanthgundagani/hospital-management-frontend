import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Docauth {
  constructor() {}

  authenticate(username: string, password: string) {
    if(username === 'doctor' && password === 'password') {
      sessionStorage.setItem('username', username);
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("doctor logged in")
    let user=sessionStorage.getItem('username');
    return !(user==null);
  }

  logout(){
    console.log("doctor logged out");
    sessionStorage.removeItem('username');
  }
}
