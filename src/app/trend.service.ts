import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs/Observable';
import {API_URL} from './constants';
import {Trend} from './trend';

@Injectable()
export class TrendService {

  constructor(private httpService: HttpService) { }

  public query(): Observable<Trend[]> {
    return this.httpService.get(`${API_URL}/trend/search/findByKweetCount?projection=details`)
      .map(reponse => reponse.json()._embedded.trend);
  }
}
