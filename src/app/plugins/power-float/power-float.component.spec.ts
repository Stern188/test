import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerFloatComponent } from './power-float.component';

describe('PowerFloatComponent', () => {
  let component: PowerFloatComponent;
  let fixture: ComponentFixture<PowerFloatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerFloatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
