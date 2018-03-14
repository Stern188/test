import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfTestRecordsComponent } from './self-test-records.component';

describe('SelfTestRecordsComponent', () => {
  let component: SelfTestRecordsComponent;
  let fixture: ComponentFixture<SelfTestRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfTestRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfTestRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
