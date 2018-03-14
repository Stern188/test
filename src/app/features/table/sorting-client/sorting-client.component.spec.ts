import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingClientComponent } from './sorting-client.component';

describe('SortingClientComponent', () => {
  let component: SortingClientComponent;
  let fixture: ComponentFixture<SortingClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
