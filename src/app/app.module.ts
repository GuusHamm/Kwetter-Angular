import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {StartpageComponent} from './startpage/startpage.component';
import {AccountComponent} from './account/account.component';
import {routing} from './app.routing';
import {KweetComponent} from './kweet/kweet.component';
import {KweetService} from './kweet.service';
import {AccountService} from './account.service';
import {HttpService} from './http.service';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AlertService} from './alert.service';
import {AlertModule} from 'ng2-bootstrap';
import {AuthService} from "./auth.service";
import {TrendService} from "./trend.service";
import { AlernateKweetComponent } from './alernate-kweet/alernate-kweet.component';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    AccountComponent,
    KweetComponent,
    LoginComponent,
    LogoutComponent,
    AlernateKweetComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    HttpService,
    HttpModule,
    KweetService,
    AccountService,
    AlertService,
    AuthService,
    TrendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
