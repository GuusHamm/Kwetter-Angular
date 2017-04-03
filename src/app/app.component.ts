import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {AccountService} from './account.service';
import {AlertService} from './alert.service';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Http, AccountService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  alerts = [];

  constructor(private alertService: AlertService, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.alertService.alerts$.subscribe(alert => {
      this.alerts.push(alert);
    });

    this.authService.setUsername('JeanGibson');
  }
}
