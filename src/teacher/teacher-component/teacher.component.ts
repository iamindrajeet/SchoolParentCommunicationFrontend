import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onClickAddAttendance(){
    this.router.navigate(['teacher/addAttendance']);
  }

  onClickUpdateAttendance(){
    this.router.navigate(['teacher/updateAttendance']);
  }

  onClickUpdateConcern(){
    this.router.navigate(['teacher/updateConcern']);
  }

  onClickAddDailyDiary(){
    this.router.navigate(['teacher/addDailyDiary']);
  }

  onClickUpdateDailyDiary(){
    this.router.navigate(['teacher/updateDailyDiary']);
  }

  onClickAddExam(){
    this.router.navigate(['teacher/addExam']);
  }

  onClickUpdateExam(){
    this.router.navigate(['teacher/updateExam']);
  }

  onClickAddReportCard(){
    this.router.navigate(['teacher/addReportCard']);
  }

  onClickUpdateReportCard(){
    this.router.navigate(['teacher/updateReportCard']);
  }
  

}
