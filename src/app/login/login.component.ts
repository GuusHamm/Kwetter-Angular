import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {AlertService} from '../alert.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public logIn(username, password) {
    this.authService.logIn(username, password)
      .subscribe(result => {
        if (result) {
          this.router.navigate(['/']);
          this.alertService.announceAlert('Logged in');

        } else {
          this.alertService.announceAlert('Log in failed', 'danger');
        }
      });
  }

}
