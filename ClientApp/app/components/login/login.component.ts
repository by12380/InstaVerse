import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle()
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((e)=> {
        console.error(e);
      });
  }

  loginWithFacebook() {
    this.auth.loginWithFacebook()
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((e)=> {
        console.error(e);
      });
  }

}
