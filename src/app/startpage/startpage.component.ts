import {Component, Inject, OnInit} from '@angular/core';
import {KweetService} from '../kweet.service';
import {Kweet} from '../kweet';
import {AlertService} from '../alert.service';
import {AuthService} from '../auth.service';
import {AccountService} from '../account.service';
import {TrendService} from '../trend.service';
import {Trend} from '../trend';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css'],
})
export class StartpageComponent implements OnInit {
  private kweets: Kweet[];
  private kweet: Kweet;
  private account: Account;
  private trends: Trend[];

  constructor(private kweetService: KweetService,
              private authService: AuthService,
              private alertService: AlertService,
              private accountService: AccountService,
              private trendService: TrendService) {
  }

  public ngOnInit() {
    this.getKweets();
    this.getTrends();
    this.kweet = new Kweet('', null);
    this.authService.username$.subscribe(username => {
      this.accountService.getByUsername(username).subscribe(account => {
        this.account = account;
        console.log(account);
      });
    });
  }

  public saveKweet(kweet) {
    console.log(kweet);
    this.kweetService.create(kweet).subscribe(it => {
      if (it) {
        this.alertService.announceAlert(`Added kweet on ${it.timestamp}`);
        this.getKweets();
      }
    });
  }

  public setTrend(trend: String) {
    this.kweetService.queryByTrend(trend).subscribe(kweets => {
      this.kweets = kweets;
    });
  }

  public getKweets() {
    this.kweetService.query().subscribe(kweets => {
      this.kweets = kweets;
    });
  }

  private getTrends() {
    this.trendService.query().subscribe(trends => {
      this.trends = trends.slice(0, 5);
    });
  }

}
