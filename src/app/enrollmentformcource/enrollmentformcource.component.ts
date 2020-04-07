import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrollmentformcource',
  templateUrl: './enrollmentformcource.component.html',
  styleUrls: ['./enrollmentformcource.component.css']
})
export class EnrollmentformcourceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['/courseagreement']);  

  }

  navigateBack(){
    this.router.navigate(['/enrollmentform']);  
  }


}
