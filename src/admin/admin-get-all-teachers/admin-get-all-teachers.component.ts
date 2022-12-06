import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITeacher } from 'src/models/teacher';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin-get-all-teachers',
  templateUrl: './admin-get-all-teachers.component.html',
  styleUrls: ['./admin-get-all-teachers.component.css']
})
export class AdminGetAllTeachersComponent implements OnInit {

  public teachers: ITeacher[]=[];

  constructor(private adminService:AdminService,
              private router:Router) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  public getTeachers(): void { 
    this.adminService.getAllTeacher().subscribe({
      next: teachers=>{
        this.teachers = teachers;
      },
      error: err=> console.log(err)
    });
  }

  // onBack(): void{
  //   this.router.navigate(['/admin/dashboard']);
  // }

  // onClickAdd(){
  //   this.router.navigate(['/admin/teacher/add'])
  // }

  // onClickUpdate(){
  //   this.router.navigate(['/admin/teacher/update'])
  // }
}
