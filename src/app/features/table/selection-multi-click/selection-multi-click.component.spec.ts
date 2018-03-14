import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionMultiClickComponent } from './selection-multi-click.component';

describe('SelectionMultiClickComponent', () => {
  let component: SelectionMultiClickComponent;
  let fixture: ComponentFixture<SelectionMultiClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionMultiClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionMultiClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
