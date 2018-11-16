import { Component } from '@angular/core';
import { AlertsService } from './services/alerts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fruits = ['b', 'a']
  public lang = 'fr';
  
  constructor(private alertsService: AlertsService) {}

  addFruit(fruit) {
    this.fruits.push(fruit);
    this.alertsService.addAlert('ok', 'dd')
    }

  deleteFruit(index) {
    this.fruits.splice(index, 1);
  }

}
