import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class AlertService {

  private alerts = new ReplaySubject<Object>(1);

  public alerts$ = this.alerts.asObservable();

  public announceAlert(message, type = 'success', timeout = 5000) {
    this.alerts.next({
      type: type,
      message: message,
      timeout: timeout
    });
  }
}
