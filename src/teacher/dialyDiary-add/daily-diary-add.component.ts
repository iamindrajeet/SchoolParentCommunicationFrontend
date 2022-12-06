import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IDiary } from 'src/models/diary';
import { TeacherService } from 'src/services/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-daily-diary-add',
  templateUrl: './daily-diary-add.component.html',
  styleUrls: ['./daily-diary-add.component.css']
})
export class DailyDiaryAddComponent implements OnInit {

  diary: IDiary = new IDiary();
  diary_output: IDiary = new IDiary();
  sId: string;

  constructor(private teacherService: TeacherService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public addDiary(form: NgForm) {
    this.teacherService.addDailyDiaryDetails(this.diary, this.sId).subscribe({
      next: diary_output => {
        this.diary_output = diary_output;
        Swal.fire('Success', `Daily Dairy Added ${this.diary_output.id}`, 'success');
      }
    });
    form.reset();

  }

}
