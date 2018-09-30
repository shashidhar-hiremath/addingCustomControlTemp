import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTextPadComponent } from './ng-text-pad.component';

describe('NgTextPadComponent', () => {
  let component: NgTextPadComponent;
  let fixture: ComponentFixture<NgTextPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTextPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTextPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
