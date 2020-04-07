import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { StudentComponent } from './student/student.component';
import { AppComponent } from './app.component';
import { AcademicprofileComponent } from './academicprofile/academicprofile.component';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';
import { EnrollmentformcourceComponent } from './enrollmentformcource/enrollmentformcource.component';
import { CourseagreementComponent } from './courseagreement/courseagreement.component';
import { IntegritypolicyComponent } from './integritypolicy/integritypolicy.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


const routes: Routes = [
  {path:'', component:StudentComponent},
  {path:'parent',component:ParentComponent},
  {path:'academicprofile', component:AcademicprofileComponent},
  {path:'enrollmentform', component:EnrollmentformComponent},
  {path:'enrollmentformcourse', component:EnrollmentformcourceComponent},
  {path:'courseagreement', component:CourseagreementComponent},
  {path:'integritypolicy', component:IntegritypolicyComponent},
  {path:'thankyou', component:ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
