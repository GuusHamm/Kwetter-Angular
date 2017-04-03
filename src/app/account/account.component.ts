import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from '../account.service';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username: string;
  account: Account;

  constructor(private accountService: AccountService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams
      .map(params => params['username'])
      .subscribe(username => this.getAccount(username));
  }

  private getAccount(username: string) {
    this.accountService.getByUsername(username).subscribe(account => {
      this.account = account;
    });

  }

}
