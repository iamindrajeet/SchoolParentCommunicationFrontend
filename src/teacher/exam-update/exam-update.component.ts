import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExam } from 'src/models/exam';
import { TeacherService } from 'src/services/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exam-update',
  templateUrl: './exam-update.component.html',
  styleUrls: ['./exam-update.component.css']
})
export class ExamUpdateComponent implements OnInit {
  
  exam: IExam = new IExam;
  public standards:number[]=[117,118];
  sIdList: string = this.standards.toString();

  constructor(private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public updateExam(){
    this.teacherService.updateExamDetails(this.exam,this.sIdList).subscribe(()=>{
    //alert("Exam updated successfully");
    Swal.fire('Success','Exam added','success');
    });
  }

  onClickTeacher(){
    this.router.navigate(['teacher']);
  }

  onSubmit(){
       this.updateExam();
   }


}
