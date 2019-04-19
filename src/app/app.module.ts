import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { CentreComponent } from './centre/centre.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

import { FivedayForecastComponent } from './fiveday-forecast/fiveday-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    CentreComponent,
    CurrentWeatherComponent,
    FivedayForecastComponent,
    
    
  ],
  imports: [
    BrowserModule,
  HttpClientModule,
  FormsModule,
  RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
