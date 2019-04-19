import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-fiveday-forecast',
  templateUrl: './fiveday-forecast.component.html',
  styleUrls: ['./fiveday-forecast.component.css']
})
export class FivedayForecastComponent implements OnInit {

  @Input() public mainData;
  @Input() public weatherForecastData;

  constructor() { }

  ngOnInit() {
  }

}
