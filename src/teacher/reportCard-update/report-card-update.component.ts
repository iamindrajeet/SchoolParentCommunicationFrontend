import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IReportCard } from 'src/models/reportCard';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-report-card-update',
  templateUrl: './report-card-update.component.html',
  styleUrls: ['./report-card-update.component.css']
})
export class ReportCardUpdateComponent implements OnInit {

  reportCard: IReportCard = new IReportCard;
  sId: string;
  public map = new Map<string,number>();
  public mystring=['helo','wcbsdcjba'];
  myStringArray = ['ENGLISH','HINDI','MATHS','SOCIAL_STUDIES',
  'SCIENCE','HISTORY_CIVICS','GEOGRAPHY'];

  constructor(private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public updateReportCard(){
    this.reportCard.marksheet=this.map;
    this.teacherService.updateReportCardDetails(this.reportCard,this.sId).subscribe(() => {
      alert("Added ReportCard Successfully")
    })
    console.log(JSON.stringify (this.map));
  }

  onSubmit(){
       this.updateReportCard();
   }


}
