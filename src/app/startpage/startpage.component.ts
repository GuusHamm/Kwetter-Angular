import {Component, OnDestroy, OnInit} from '@angular/core';
import {StompService} from 'ng2-stomp-service';
import {KweetService} from '../kweet.service';
import {Kweet} from '../kweet';
import {AlertService} from '../alert.service';
import {AuthService} from '../auth.service';
import {AccountService} from '../account.service';
import {TrendService} from '../trend.service';
import {Trend} from '../trend';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css'],
})
export class StartpageComponent implements OnInit, OnDestroy {
  private kweets: Kweet[];
  private kweet: Kweet;
  private account: Account;
  private trends: Trend[];
  private socketSubscription: Subscription;

  constructor(private kweetService: KweetService,
              private authService: AuthService,
              private alertService: AlertService,
              private accountService: AccountService,
              private trendService: TrendService,
              private stomp: StompService) {
  }

  public ngOnInit() {
    this.getKweets();
    this.getTrends();
    this.kweet = new Kweet('', null);
    this.authService.username$.subscribe(username => {
      this.accountService.getByUsername(username).subscribe(account => {
        this.account = account;
      });
    });

    this.stomp.configure({
      host: 'http://localhost:8080/kwetter-0.0.1-SNAPSHOT/websocket',
      debug: true
    });
    this.stomp.startConnect().then(() => {
      console.log('Socket Connected');
      this.socketSubscription = this.stomp.subscribe('/topic/kweet', (data, headers) => {
        this.kweets.splice(0, 0, data);
      });
    }).catch(() => {
      this.stomp.disconnect();
    });
  }
  public ngOnDestroy() {
    this.socketSubscription.unsubscribe();
    this.stomp.disconnect().then(() => {
      console.log('Socket Closed');
    });
  }

  public saveKweet(kweet) {
    console.log(kweet);
    this.kweetService.create(kweet).subscribe(it => {
      if (it) {
        this.alertService.announceAlert(`Added kweet on ${it.timestamp}`);
        this.kweet.message = '';
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
