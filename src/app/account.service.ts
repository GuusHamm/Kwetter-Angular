import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {API_URL} from './constants';
import {Headers, Http} from '@angular/http';
import {HttpService} from './http.service';
import {Account} from './account';
import {Kweet} from "./kweet";

@Injectable()
export class AccountService {
  constructor(private httpService: HttpService) {
  }

  public query(): Observable<Account> {
    return this.httpService.get(`${API_URL}/account`)
      .map(response => response.json().embedded.account);
  }

  public get(id: number): Observable<Account> {
    return this.httpService.get(`${API_URL}/account/${id}`)
      .map(response => response.json());
  }

  public getByUsername(username: string): Observable<Account> {
    return this.httpService.get(`${API_URL}/account/search/findByUsername?username=${username}&projection=details`)
      .map(response => {
          const account: Account = response.json()._embedded.account[0];

          account.kweets.map((kweet: Kweet) => {
            kweet.account = {username: account.username};
          });
          account.latestKweet = {
            account: {
              username: account.username
            },
            ...account.latestKweet
          };
          return account;
        }
      );
  }

}
