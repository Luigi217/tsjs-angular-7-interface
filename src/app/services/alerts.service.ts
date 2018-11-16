import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  public alerts = new Subject<object>();

  constructor() { }

  addAlert(message:string, importance: string) {
    this.alerts.next({message, importance});
  }

  getAlerts() {
    return this.alerts.asObservable();
  }

  clear() {
    this.alerts.next();
  }
}
