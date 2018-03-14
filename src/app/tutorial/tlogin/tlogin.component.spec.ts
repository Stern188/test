import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: TLoginComponent;
  let fixture: ComponentFixture<TLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
