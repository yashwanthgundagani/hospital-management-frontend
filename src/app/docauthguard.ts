import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Docauth } from './docauth';

@Injectable({
  providedIn: 'root',
})
export class Docauthguard implements CanActivate {
  constructor(private docauth: Docauth,private router: Router) {}

  canActivate() {
    if(!this.docauth.isUserLoggedIn()) {
      this.router.navigate(['doclogin']);
      return false;
    }
    return true;
  }
}
