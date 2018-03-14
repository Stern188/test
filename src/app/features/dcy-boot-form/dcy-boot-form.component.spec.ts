import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcyBootFormComponent } from './dcy-boot-form.component';

describe('DcyBootFormComponent', () => {
  let component: DcyBootFormComponent;
  let fixture: ComponentFixture<DcyBootFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcyBootFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcyBootFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
