import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Adminauth {
  constructor(private router:Router) {}

  authenticate(username: string, password: string) {
    if(username === 'admin' && password === 'admin') {
      sessionStorage.setItem('username2', username);
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("admin user logged in");
    let user = sessionStorage.getItem('username2')
    return !(user==null);
  }

  logout(){
    console.log("admin user logged out");
    sessionStorage.removeItem('username2');
    this.router.navigate(['/home']);
  }
}
