import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IReportCard } from 'src/models/reportCard';
import { subject } from 'src/models/subject';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-report-card-add',
  templateUrl: './report-card-add.component.html',
  styleUrls: ['./report-card-add.component.css']
})
export class ReportCardAddComponent implements OnInit {
  // reportCardForm:FormGroup;
  reportCard: IReportCard = new IReportCard();
  sId: string;
  public map = new Map<string,number>();
  // public mystring=['helo','wcbsdcjba'];
  myStringArray = ['ENGLISH','HINDI','MATHS','SOCIAL_STUDIES',
  'SCIENCE','HISTORY_CIVICS','GEOGRAPHY'];

  mystring:subject[]=[subject.ENGLISH];

  constructor(private teacherService:TeacherService,
              private router: Router) { }

  ngOnInit(): void {
    // this.reportCardForm=new FormGroup({
    //   student_id:new FormControl('',[Validators.required,Validators.pattern[0-9]]),

    // });

  }

  public addReportCard(){
    // this.reportCard.marksheet=this.map;
    // this.teacherService.addReportCardDetails(this.reportCard,this.sId).subscribe(() => {
    //   alert("Added ReportCard Successfully")
    // });
    console.log(this.map);
    
  }

  onClickTeacher(){
    this.router.navigate(['teacher']);
  }

  onSubmit(){
       this.addReportCard();
   }

}
