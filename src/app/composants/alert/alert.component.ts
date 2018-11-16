import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  public alerts = [];

  constructor(private alertsSerivce: AlertsService) {
    this.alertsSerivce.getAlerts().subscribe((alert: object) => {
      if(!alert) {
        this.alerts = [];
        return;
      }

      this.addAlert({message: alert['message'], importance: alert['importance']});
    });
  }

  addAlert({message, importance}) {
    this.alerts.push({ message, importance });
    setTimeout(() => this.deleteAlert(message, importance), 5 * 1000);
  }

  deleteAlert(message, importance) {
    this.alerts = this.alerts.filter(el => {
      if (el.message !== message && el.importance !== importance) {
        return true;
      }
    });
  }

}
