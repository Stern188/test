import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaydateComponent } from './laydate.component';

describe('LaydateComponent', () => {
  let component: LaydateComponent;
  let fixture: ComponentFixture<LaydateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaydateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
