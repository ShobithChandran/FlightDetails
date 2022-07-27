import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTimingComponent } from './flight-timing.component';

describe('FlightTimingComponent', () => {
  let component: FlightTimingComponent;
  let fixture: ComponentFixture<FlightTimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightTimingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
