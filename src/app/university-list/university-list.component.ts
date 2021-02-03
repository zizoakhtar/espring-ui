import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { University } from "../university";
import { Router } from '@angular/router';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {
  universities: Observable<University[]>;

  constructor(private us: UniversityService,
    private router: Router) {}
    
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.universities=this.us.getUniversityList();
  }

  deleteUniversity(id: number) {
    this.us.deleteUniversity(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  detailsUniversity(id: number){
    this.router.navigate(['details', id]);
  }
  updateUniversity(id: number){
    this.router.navigate(['update', id]);
  }
}

 


