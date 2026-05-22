import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Docauth } from '../docauth';

@Component({
  selector: 'app-doclogin',
  standalone: false,
  templateUrl: './doclogin.html',
  styleUrl: './doclogin.css',
})
export class Doclogin {
  
  username: string = '';
  password: string = '';
  invalidLogin: boolean = false;

  constructor(private router: Router,private docauth: Docauth) {}

  checkLogin() {
    if (this.docauth.authenticate(this.username, this.password)) {
      this.router.navigate(['docdash']);
      this.invalidLogin = false;
      }
      else{
        this.invalidLogin = true;
        alert('Invalid credentials. Please try again.');
        this.router.navigate(['home']);
      }
  }
}
