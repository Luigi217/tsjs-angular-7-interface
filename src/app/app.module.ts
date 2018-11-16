import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { FilterPipe } from './pipes/filter.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
import {AlertsService} from './services/alerts.service';

import { AlertComponent } from './composants/alert/alert.component';
import { TodolistComponent } from './composants/todolist/todolist.component';
import { ResultComponent } from './result/result.component';


import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path:'result', component: ResultComponent},
  { path: '', component: TodolistComponent},
  { path: '**', component: TodolistComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TranslatePipe,
    AlertComponent,
    TodolistComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    FormsModule
  ],
  providers: [
    AlertsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
