import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcyMatFormComponent } from './dcy-mat-form.component';

describe('DcyMatFormComponent', () => {
  let component: DcyMatFormComponent;
  let fixture: ComponentFixture<DcyMatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcyMatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcyMatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
