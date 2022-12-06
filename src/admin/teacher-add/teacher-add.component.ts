import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITeacher } from 'src/models/teacher';
import { AdminService } from 'src/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {

  teacher: ITeacher = new ITeacher();
  teacher_output:ITeacher = new ITeacher();
  
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    
  }

  onAddTeacher(form: NgForm):void{
    this.adminService.addTeacherDetails(this.teacher).subscribe({
      next: teacher =>{
        this.teacher_output=teacher;
        Swal.fire("Success","Teacher Added with id: "+ this.teacher_output.id,"success");
      }
    });
    form.resetForm();
  }

}
