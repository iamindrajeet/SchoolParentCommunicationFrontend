import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent-component/parent.component';
import { GetReportCardComponent } from './get-reportcard/get-report-card.component';
import { GetFeeComponent } from './get-fee/get-fee.component';
import { GetExamComponent } from './get-exam/get-exam.component';
import { GetDailyDiaryComponent } from './get-daily-diary/get-daily-diary.component';
import { GetAttendanceComponent } from './get-attendance/get-attendance.component';
import { RouterModule } from '@angular/router';
import { AddConcernComponent } from './add-concern/add-concern.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
   ParentComponent,
   GetReportCardComponent,
   GetFeeComponent,
   GetExamComponent,
   GetDailyDiaryComponent,
   GetAttendanceComponent,
   AddConcernComponent
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path:'parent/studentDetails', component:ParentComponent },
      { path:'parent/getAttendance', component:GetAttendanceComponent },
      { path:'parent/getDailyDiary', component:GetDailyDiaryComponent },
      { path:'parent/getFee', component:GetFeeComponent },
      { path:'parent/getExam', component:GetExamComponent },
      { path:'parent/getReportCard', component:GetReportCardComponent },
      { path:'parent/addConcern', component:AddConcernComponent }
     
    ])
  ]
})
export class ParentModule { }
