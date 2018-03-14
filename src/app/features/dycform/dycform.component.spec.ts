import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DycformComponent } from './dycform.component';

describe('DycformComponent', () => {
  let component: DycformComponent;
  let fixture: ComponentFixture<DycformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DycformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DycformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
