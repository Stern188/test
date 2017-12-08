import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryLaydateComponent } from './jquery-laydate.component';

describe('JqueryLaydateComponent', () => {
  let component: JqueryLaydateComponent;
  let fixture: ComponentFixture<JqueryLaydateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueryLaydateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryLaydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
