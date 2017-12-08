import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMomentPickerComponent } from './angular-moment-picker.component';

describe('AngularMomentPickerComponent', () => {
  let component: AngularMomentPickerComponent;
  let fixture: ComponentFixture<AngularMomentPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMomentPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMomentPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
