import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CustomChartComponent } from './custom-chart/custom-chart.component';
import {BaseChartComponent} from '@swimlane/ngx-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//import { NgxUIModule } from '@swimlane/ngx-ui';
@NgModule({
  declarations: [
    AppComponent,
    CustomChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
