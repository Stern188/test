import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Personalsettings } from './personalsettings.component';

describe('Personalsettings', () => {
  let component: Personalsettings;
  let fixture: ComponentFixture<Personalsettings>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Personalsettings ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Personalsettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
