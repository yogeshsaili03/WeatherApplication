import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.css']
})
export class CentreComponent implements OnInit {
  weatherForecastData: any;
  location :any;
  mainData:any;
  current:any;
  constructor(public data:DataService) { }

  ngOnInit() {
  }


  getWeather(name:string) 
  {
    this.data.getWeather(name)
      .subscribe(res => {
       
        this.weatherForecastData= res.forecast.forecastday;
        this.location=res.location;
        this.mainData=res.forecast.forecastday[0];
        this.current=res.current;
        console.log(res)
        }, (err) => {
          console.log(err);
        }
      );
  }
}
