import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IAttendance } from 'src/models/attendance';
import { TeacherService } from 'src/services/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attendance-update',
  templateUrl: './attendance-update.component.html',
  styleUrls: ['./attendance-update.component.css']
})
export class AttendanceUpdateComponent implements OnInit {

  attendance: IAttendance = new IAttendance();
  sId: string;

  constructor(private teacherService: TeacherService,
              private router: Router ) { }

  ngOnInit(): void {
  }

  public updateAttendance(form: NgForm){
    this.teacherService.updateAttendanceDetails(this.attendance,this.sId).subscribe(()=>{
      Swal.fire('Success',`Attendance Updated `,'success');
    });
    form.reset();
  }


}
