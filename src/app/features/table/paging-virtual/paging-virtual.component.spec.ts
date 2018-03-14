import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingVirtualComponent } from './paging-virtual.component';

describe('PagingVirtualComponent', () => {
  let component: PagingVirtualComponent;
  let fixture: ComponentFixture<PagingVirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingVirtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
