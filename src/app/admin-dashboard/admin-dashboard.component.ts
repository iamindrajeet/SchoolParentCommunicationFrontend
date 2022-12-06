import { Component, OnInit } from '@angular/core';
import { IParent } from 'src/models/parent';
import { IStudent } from 'src/models/student';
import { ITeacher } from 'src/models/teacher';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  parents: IParent[]=[];
  students:IStudent[]=[];
  teachers:ITeacher[]=[];

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.getParents();
    this.getTeachers();
    this.getStudents();
  }

  public getParents(): void {
    this.adminService.getAllParent().subscribe({
      next: parents => {
        this.parents = parents;
      },
      error: err => console.log(err)
    });
  }

  public getStudents():void{
    this.adminService.getAllStudent().subscribe({
      next: students =>{
        this.students = students;
      }
    });
  }

  public getTeachers(): void { 
    this.adminService.getAllTeacher().subscribe({
      next: teachers=>{
        this.teachers = teachers;
      },
      error: err=> console.log(err)
    });
  }

}
