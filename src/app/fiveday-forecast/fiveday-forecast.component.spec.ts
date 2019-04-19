import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivedayForecastComponent } from './fiveday-forecast.component';

describe('FivedayForecastComponent', () => {
  let component: FivedayForecastComponent;
  let fixture: ComponentFixture<FivedayForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivedayForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivedayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
