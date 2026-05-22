import { Injectable } from '@angular/core';
import { Adminauth } from './adminauth';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Adminauthguard implements CanActivate {
  constructor(private adminauth: Adminauth, private router: Router) {}

  canActivate(): boolean {
    if (!this.adminauth.isUserLoggedIn()) {
      this.router.navigate(['/adlogin']);
      return false;
    }
    return true;
  }
}
