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

import {AuthGuard} from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './composants/login/login.component';
import { StatComponent } from './composants/stat/stat.component';
import { MnistComponent } from './composants/mnist/mnist.component';
import { HomeComponent } from './composants/home/home.component';

const appRoutes: Routes = [
/*
  { path: 'result',  component: ResultComponent, canActivate: [AuthGuard]},
  { path: 'todo_en', component: TodolistComponent, data: [{lang: 'en'}]},
  { path: '', component: TodolistComponent},
  { path: '**', component: TodolistComponent}
  { path: 'toto', component: TodolistComponent},
*/
  { path: '', component: HomeComponent},
  { path: 'stat', component: StatComponent},
  { path: 'login', component: LoginComponent},
  { path: 'MNIST', component: MnistComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TranslatePipe,
    AlertComponent,
    TodolistComponent,
    ResultComponent,
    LoginComponent,
    StatComponent,
    MnistComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    FormsModule
  ],
  providers: [
    AlertsService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
