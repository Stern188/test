import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DycFormComponent } from './dycform.component';

describe('DynamicFormComponent', () => {
  let component: DycFormComponent;
  let fixture: ComponentFixture<DycFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DycFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DycFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
