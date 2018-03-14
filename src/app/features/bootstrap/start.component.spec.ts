import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapStartComponent} from './start.component';

describe('BootstrapStartComponent', () => {
  let component: BootstrapStartComponent;
  let fixture: ComponentFixture<BootstrapStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
