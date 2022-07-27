import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgonchangeExpParentComponent } from './ngonchange-exp-parent.component';

describe('NgonchangeExpParentComponent', () => {
  let component: NgonchangeExpParentComponent;
  let fixture: ComponentFixture<NgonchangeExpParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgonchangeExpParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgonchangeExpParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
