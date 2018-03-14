import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TStartComponent } from './tstart.component';

describe('StartComponent', () => {
  let component: TStartComponent;
  let fixture: ComponentFixture<TStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
