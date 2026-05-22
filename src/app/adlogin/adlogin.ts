import { Component } from '@angular/core';
import { Adminauth } from '../adminauth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adlogin',
  standalone: false,
  templateUrl: './adlogin.html',
  styleUrl: './adlogin.css',
})
export class Adlogin {
  username: string = '';
  password: string = '';
  invalidLogin: boolean = false;

  constructor(private router: Router,private adminauth: Adminauth) {}

  checkLogin() {
    if (this.adminauth.authenticate(this.username, this.password)) {
      this.router.navigate(['admin']);
      this.invalidLogin = false;
      }
      else{
        this.invalidLogin = true;
        alert('Invalid credentials. Please try again.');
        this.router.navigate(['home']);
      }
  }
}
