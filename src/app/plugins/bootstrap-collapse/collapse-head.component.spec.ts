import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseHeadComponent } from './collapse-head.component';

describe('CollapseHeadComponent', () => {
  let component: CollapseHeadComponent;
  let fixture: ComponentFixture<CollapseHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
