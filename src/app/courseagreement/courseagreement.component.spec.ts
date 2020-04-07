import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseagreementComponent } from './courseagreement.component';

describe('CourseagreementComponent', () => {
  let component: CourseagreementComponent;
  let fixture: ComponentFixture<CourseagreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseagreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseagreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
