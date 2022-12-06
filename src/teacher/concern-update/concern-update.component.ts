import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IConcern } from 'src/models/concern';
import { TeacherService } from 'src/services/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-concern-update',
  templateUrl: './concern-update.component.html',
  styleUrls: ['./concern-update.component.css']
})
export class ConcernUpdateComponent implements OnInit {

  concern_object: IConcern = new IConcern;
  pId: string;

  constructor(private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public updateConcern(form:NgForm) {
    //this.concern.isResolved=true;
    console.log(this.concern_object);
    this.teacherService.updateConcernDetails(this.concern_object, this.pId).subscribe(() => {
      // alert("Updated Concern Successfully");
      Swal.fire('Success','Concern Updated','success');  
    });
    form.reset();
  }

}


