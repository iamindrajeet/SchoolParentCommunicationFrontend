import { Component, OnInit } from '@angular/core';
import { IDiary } from 'src/models/diary';
import { ParentService } from 'src/services/parent.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-daily-diary',
  templateUrl: './get-daily-diary.component.html',
  styleUrls: ['./get-daily-diary.component.css']
})
export class GetDailyDiaryComponent implements OnInit {

  // public dailyDiary !: IDiary;
  dailyDiary: IDiary = new IDiary();
  sId: number;

  constructor(private parentService: ParentService) { }

  ngOnInit(): void {
    this.sId = parseInt(localStorage.getItem("studentID"));
    this.getDailyDiary();
  }

  getDailyDiary(): void {
    this.parentService.getDialyDiary(this.sId).subscribe({
      next: dailyDiary => {
        this.dailyDiary = dailyDiary;
      },
      error: err => {
        console.log(err)
        Swal.fire("Error", "Student id is invalid", "error");
      }
    });
  }

}
