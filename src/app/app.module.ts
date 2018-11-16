import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { FilterPipe } from './pipes/filter.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
import {AlertsService} from './services/alerts.service';

import { AlertComponent } from './composants/alert/alert.component';
import { TodolistComponent } from './composants/todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TranslatePipe,
    AlertComponent,
    TodolistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AlertsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
