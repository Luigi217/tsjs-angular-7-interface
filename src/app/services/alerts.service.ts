import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Alert, AlterType } from '../models/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  public alerts = new Subject<Alert>();

  constructor() { }

  success(message: string) {
    this.addAlert(message, AlterType.Success);
  }

  info(message: string) {
    this.addAlert(message, AlterType.Info);
  }

  error(message: string) {
    this.addAlert(message, AlterType.Error);
  }

  warning(message: string) {
    this.addAlert(message, AlterType.Warning);
  }
 
  addAlert(message: string, type: AlterType) {
    this.alerts.next({message, type});
  }

  getAlerts() {
    return this.alerts.asObservable();
  }

  clear() {
    this.alerts.next();
  }
}
