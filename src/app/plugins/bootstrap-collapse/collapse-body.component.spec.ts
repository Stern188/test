import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseBodyComponent } from './collapse-body.component';

describe('CollapseBodyComponent', () => {
  let component: CollapseBodyComponent;
  let fixture: ComponentFixture<CollapseBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
