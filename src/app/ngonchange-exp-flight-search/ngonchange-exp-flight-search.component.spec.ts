import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgonchangeExpFlightSearchComponent } from './ngonchange-exp-flight-search.component';

describe('NgonchangeExpFlightSearchComponent', () => {
  let component: NgonchangeExpFlightSearchComponent;
  let fixture: ComponentFixture<NgonchangeExpFlightSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgonchangeExpFlightSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgonchangeExpFlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
