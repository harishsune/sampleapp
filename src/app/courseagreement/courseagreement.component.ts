import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courseagreement',
  templateUrl: './courseagreement.component.html',
  styleUrls: ['./courseagreement.component.css']
})
export class CourseagreementComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['/thankyou']);  

  }

  navigateBack(){
    this.router.navigate(['/enrollmentformcourse']);  
  }


}
