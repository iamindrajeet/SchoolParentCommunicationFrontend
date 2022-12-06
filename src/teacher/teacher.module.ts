import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher-component/teacher.component';
import { ExamAddComponent } from './exam-add/exam-add.component';
import { RouterModule } from '@angular/router';
import { ExamUpdateComponent } from './exam-update/exam-update.component';
import { ReportCardAddComponent } from './reportCard-add/report-card-add.component';
import { ReportCardUpdateComponent } from './reportCard-update/report-card-update.component';
import { AttendanceAddComponent } from './attendance-add/attendance-add.component';
import { AttendanceUpdateComponent } from './attendance-update/attendance-update.component';
import { DailyDiaryAddComponent } from './dialyDiary-add/daily-diary-add.component';
import { DailyDiaryUpdateComponent } from './dialyDiary-update/daily-diary-update.component';
import { ConcernUpdateComponent } from './concern-update/concern-update.component';
import { FormsModule } from '@angular/forms';
import { TeacherDashboardComponent } from 'src/app/teacher-dashboard/teacher-dashboard.component';



@NgModule({
  declarations: [
    TeacherComponent,
    ExamAddComponent,
    ExamUpdateComponent,
    ReportCardAddComponent,
    ReportCardUpdateComponent,
    AttendanceAddComponent,
    AttendanceUpdateComponent,
    DailyDiaryAddComponent,
    DailyDiaryUpdateComponent,
    ConcernUpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      // { path:'teacher/dashboard', component:  TeacherDashboardComponent},
      {path:'teacher/addExam', component:ExamAddComponent},
      {path:'teacher/updateExam', component:ExamUpdateComponent},
      {path:'teacher/addAttendance', component:AttendanceAddComponent},
      {path:'teacher/updateAttendance', component:AttendanceUpdateComponent},
      {path:'teacher/addDailyDiary', component:DailyDiaryAddComponent},
      {path:'teacher/updateDailyDiary', component:DailyDiaryUpdateComponent},
      {path:'teacher/updateConcern', component:ConcernUpdateComponent},
      {path:'teacher/addReportCard', component:ReportCardAddComponent},
      {path:'teacher/updateReportCard', component:ReportCardUpdateComponent},
    ])
  ]
})
export class TeacherModule { }
