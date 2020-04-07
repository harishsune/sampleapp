import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegritypolicyComponent } from './integritypolicy.component';

describe('IntegritypolicyComponent', () => {
  let component: IntegritypolicyComponent;
  let fixture: ComponentFixture<IntegritypolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegritypolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegritypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
