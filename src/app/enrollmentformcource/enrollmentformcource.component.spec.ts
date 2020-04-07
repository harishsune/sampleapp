import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentformcourceComponent } from './enrollmentformcource.component';

describe('EnrollmentformcourceComponent', () => {
  let component: EnrollmentformcourceComponent;
  let fixture: ComponentFixture<EnrollmentformcourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentformcourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentformcourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
