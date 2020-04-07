import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { StudentComponent } from './student/student.component';
import { IntegritypolicyComponent } from './integritypolicy/integritypolicy.component';
import { AcademicprofileComponent } from './academicprofile/academicprofile.component';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';
import { EnrollmentformcourceComponent } from './enrollmentformcource/enrollmentformcource.component';
import { CourseagreementComponent } from './courseagreement/courseagreement.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    StudentComponent,
    IntegritypolicyComponent,
    AcademicprofileComponent,
    EnrollmentformComponent,
    EnrollmentformcourceComponent,
    CourseagreementComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
