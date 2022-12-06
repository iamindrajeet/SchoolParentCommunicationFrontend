import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/models/student';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin-get-all-student',
  templateUrl: './admin-get-all-student.component.html',
  styleUrls: ['./admin-get-all-student.component.css']
})
export class AdminGetAllStudentComponent implements OnInit {

  public students:IStudent[]=[];

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  public getStudents():void{
    this.adminService.getAllStudent().subscribe({
      next: students =>{
        this.students = students;
      }
    });
  }
}
