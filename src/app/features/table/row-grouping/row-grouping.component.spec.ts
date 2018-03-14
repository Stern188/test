import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowGroupingComponent } from './row-grouping.component';

describe('RowGroupingComponent', () => {
  let component: RowGroupingComponent;
  let fixture: ComponentFixture<RowGroupingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowGroupingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
