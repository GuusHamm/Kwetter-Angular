import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  public get(url) {
    return this.http.get(url, {
      headers: this.setHeaders()
    });
  }

  public post(url, object: Object) {
    return this.http.post(url, object, {
      headers: this.setHeaders()
    });
  }

  private setHeaders(): Headers {
    const headers: Headers = new Headers();
    headers.append('Authorization', `Basic ${btoa('JeanGibson:1234')}`);

    return headers;
  }
}
