import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { University } from '../university';
import { UniversityService } from '../university.service';


@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css']
})
export class UniversityDetailsComponent implements OnInit {

 
 
  id: number;
  university: University;

  constructor(private route: ActivatedRoute,private router: Router,
    private us: UniversityService) { }

  ngOnInit() {
    this.university = new University();

    this.id = this.route.snapshot.params['id'];
    
    this.us.getUniversity(this.id)
      .subscribe(data => {
        console.log(data)
        this.university = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/universities']);
  }
}