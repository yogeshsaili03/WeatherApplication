import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
 
url:string="http://api.apixu.com/v1/forecast.json?key=04aa796c3ec5499ea3e142709191804&q="
days:string="&days=5"
  getWeather(name:string): Observable<any> {
    return (this.http.get(this.url+name+this.days , { responseType: "json" }) )
  }
}
