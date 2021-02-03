import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';
import { University } from "../university";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-university',
  templateUrl: './create-university.component.html',
  styleUrls: ['./create-university.component.css']
})
export class CreateUniversityComponent implements OnInit {
  

  university: University = new University();
  submitted = false;

  constructor(private US: UniversityService,
    private router: Router) { 

    }

  ngOnInit() {
  }

  newUniversity(): void {
    this.submitted = false;
    this.university = new University();
  }

  


  save() {
    this.US.createUniversity(this.university)
      .subscribe(data => console.log(data), error => console.log(error));
    this.university = new University();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/universities']);
  }
}