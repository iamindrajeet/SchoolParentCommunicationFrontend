import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IAttendance } from 'src/models/attendance';
import { TeacherService } from 'src/services/teacher.service';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-attendance-add',
  templateUrl: './attendance-add.component.html',
  styleUrls: ['./attendance-add.component.css']
})
export class AttendanceAddComponent implements OnInit {

  attendance: IAttendance = new IAttendance();
  attendance_output:IAttendance = new IAttendance();
  sId: string;

  constructor(private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public addAttendance(form: NgForm){
    this.teacherService.addAttendanceDetails(this.attendance,this.sId).subscribe({
      next:attendance_output =>{
        this.attendance_output = attendance_output;
        Swal.fire('Success',`Attendance added ${attendance_output.id} `,'success');
      }
      });
      form.reset();
    }
  

}
