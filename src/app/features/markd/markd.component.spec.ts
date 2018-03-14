import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdComponent } from './markd.component';

describe('MarkdComponent', () => {
  let component: MarkdComponent;
  let fixture: ComponentFixture<MarkdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
