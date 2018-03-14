import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDomComponent } from './template-dom.component';

describe('TemplateDomComponent', () => {
  let component: TemplateDomComponent;
  let fixture: ComponentFixture<TemplateDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
