import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IDiary } from 'src/models/diary';
import { TeacherService } from 'src/services/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-daily-diary-update',
  templateUrl: './daily-diary-update.component.html',
  styleUrls: ['./daily-diary-update.component.css']
})
export class DailyDiaryUpdateComponent implements OnInit {

  diary: IDiary = new IDiary;
  sId: string

  constructor(private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public updateDiary(form:NgForm) {
    this.teacherService.updateDailyDiaryDetails(this.diary, this.sId).subscribe(() => {
      //alert("Updated Diary Successfully");
      Swal.fire('Success','Daily dairy updated','success');
    });
    form.reset();
  }


}
