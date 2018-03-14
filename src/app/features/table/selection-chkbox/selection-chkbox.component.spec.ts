import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionChkboxComponent } from './selection-chkbox.component';

describe('SelectionChkboxComponent', () => {
  let component: SelectionChkboxComponent;
  let fixture: ComponentFixture<SelectionChkboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionChkboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionChkboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
