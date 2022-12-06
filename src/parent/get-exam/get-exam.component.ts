import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { debug } from 'console';
import { IExam } from 'src/models/exam';
import { ParentService } from 'src/services/parent.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-exam',
  templateUrl: './get-exam.component.html',
  styleUrls: ['./get-exam.component.css'],
  providers: [DatePipe]
})
export class GetExamComponent implements OnInit {

  exam: IExam = new IExam();
  examDate: string;
  date: Date;

  constructor(private parentService: ParentService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.date = JSON.parse(localStorage.getItem("examDate"));
    console.log(this.date);
    this.getExam();
  }
  getExam(): void {
    this.parentService.getExamDetails(this.date).subscribe({
      next: exam => {
        this.exam = exam;
        console.log(exam);

      },
      error: err => {
        console.log(err)
        Swal.fire("Error", "Student id is invalid", "error");
      }
    });
  }

}
