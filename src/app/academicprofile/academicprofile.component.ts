import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-academicprofile',
  templateUrl: './academicprofile.component.html',
  styleUrls: ['./academicprofile.component.css']
})
export class AcademicprofileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['/enrollmentform']);  

  }

  navigateBack(){
    this.router.navigate(['/integritypolicy']);  
  }


}
