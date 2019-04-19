import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
@Input() public location;
@Input() public mainData;
@Input() public current;
  constructor() { }

  ngOnInit() {
  }

}
