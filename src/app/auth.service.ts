import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {API_URL} from './constants';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from "rxjs";

@Injectable()
export class AuthService {
  private username = new ReplaySubject<string>(1);

  public username$ = this.username.asObservable();

  constructor(private http: Http) {
  }

  public logIn(username: string, password: string): Observable<boolean> {
    const auth = btoa(`${username}:${password}`);
    const headers: Headers = new Headers();
    headers.append('Authorization', `Basic ${btoa(auth)}`);

    const observable = this.http.get(`${API_URL}`, {
      headers: headers
    }).map(response => response.ok);

    observable.subscribe(status => {
      if (status === true) {
        localStorage.setItem('username', username);
        localStorage.setItem('auth', auth);
        this.username.next(username);
      }
    });

    return observable;
  }

  public setUsername(username: string) {
    this.username.next(username);
  }

}
