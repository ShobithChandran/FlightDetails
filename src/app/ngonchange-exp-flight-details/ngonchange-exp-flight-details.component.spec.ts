import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgonchangeExpFlightDetailsComponent } from './ngonchange-exp-flight-details.component';

describe('NgonchangeExpFlightDetailsComponent', () => {
  let component: NgonchangeExpFlightDetailsComponent;
  let fixture: ComponentFixture<NgonchangeExpFlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgonchangeExpFlightDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgonchangeExpFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
