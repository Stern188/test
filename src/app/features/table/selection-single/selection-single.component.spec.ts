import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionSingleComponent } from './selection-single.component';

describe('SelectionSingleComponent', () => {
  let component: SelectionSingleComponent;
  let fixture: ComponentFixture<SelectionSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
