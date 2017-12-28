import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryTawdateComponent } from './jquery-tawdate.component';

describe('JqueryTawdateComponent', () => {
  let component: JqueryTawdateComponent;
  let fixture: ComponentFixture<JqueryTawdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueryTawdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryTawdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
