import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Kweet} from './kweet';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/map';
import {API_URL} from './constants';
import {AccountService} from './account.service';
import {HttpService} from './http.service';

@Injectable()
export class KweetService {
  constructor(private httpService: HttpService) {
  }

  public create(kweet: Kweet): Observable<Kweet> {
    return this.httpService.post(`${API_URL}/kweet`, kweet)
      .map(response => response.json());
  }

  public query(): Observable<Kweet[]> {
    return this.httpService.get(`${API_URL}/kweet/search/findAllByOrderByIdDesc`)
      .map(response => response.json()._embedded.kweet);
  }

  public queryByTrend(trend: String): Observable<Kweet[]> {
    return this.httpService.get(`${API_URL}/kweet/search/findByTrendsNameIgnoreCaseOrderByIdDesc?trend=${trend}`)
      .map(response => response.json()._embedded.kweet);
  }
}
