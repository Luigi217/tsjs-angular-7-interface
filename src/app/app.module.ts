import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { FilterPipe } from './pipes/filter.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
import { AlertComponent } from './composants/alert/alert.component';

import {AlertsService} from './services/alerts.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TranslatePipe,
    AlertComponent,
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
