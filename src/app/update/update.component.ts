import { Component, OnInit } from '@angular/core';
import { University } from '../university';
import { Router, ActivatedRoute } from '@angular/router';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  university: University;

  constructor(private route: ActivatedRoute,private router: Router,
    private universityService: UniversityService) { }

  ngOnInit() {
    this.university = new University();

    this.id = this.route.snapshot.params['id'];
    
    this.universityService.getUniversity(this.id)
      .subscribe(data => {
        console.log(data)
        this.university = data;
      }, error => console.log(error));
  }

  updateUniversity() {
    this.universityService.updateUniversity(this.id, this.university)
      .subscribe(data => console.log(data), error => console.log(error));
    this.university = new University();
    this.gotoList();
  }

  onSubmit() {
    this.updateUniversity();    
  }

  gotoList() {
    this.router.navigate(['/universities']);
  }
}