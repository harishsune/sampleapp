import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-integritypolicy',
  templateUrl: './integritypolicy.component.html',
  styleUrls: ['./integritypolicy.component.css']
})
export class IntegritypolicyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['/academicprofile']);  

  }

  navigateBack(){
    this.router.navigate(['/parent']);  
  }


}
