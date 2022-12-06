import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IExam } from 'src/models/exam';
import { TeacherService } from 'src/services/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exam-add',
  templateUrl: './exam-add.component.html',
  styleUrls: ['./exam-add.component.css']
})
export class ExamAddComponent implements OnInit {

  exam: IExam = new IExam();
  exam_output: IExam = new IExam();
  standards:number[]=[117,120];
  sIdList: string = this.standards.toString();

  constructor(private teacherService: TeacherService,
              private router:Router) { }

  ngOnInit(): void {
  }

  public addExam(form: NgForm){
    this.teacherService.addExamDetails(this.exam,this.sIdList).subscribe({
    next:exam_output=>{
      this.exam_output=exam_output;
      Swal.fire('Success','Exam added','success');
    }
    });
    form.reset();
  }

}
