import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgonchangeExpChildComponent } from './ngonchange-exp-child.component';

describe('NgonchangeExpChildComponent', () => {
  let component: NgonchangeExpChildComponent;
  let fixture: ComponentFixture<NgonchangeExpChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgonchangeExpChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgonchangeExpChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
