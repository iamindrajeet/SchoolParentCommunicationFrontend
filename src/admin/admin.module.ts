import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin-component/admin.component';
import { RouterModule } from '@angular/router';
import { AdminGetAllParentsComponent } from './admin-get-all-parents/admin-get-all-parents.component';
import { AdminGetAllTeachersComponent } from './admin-get-all-teachers/admin-get-all-teachers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherUpdateComponent } from './teacher-update/teacher-update.component';
import { ParentUpdateComponent } from './parent-update/parent-update.component';
import { ParentAddComponent } from './parent-add/parent-add.component';
import { AdminGetAllStudentComponent } from './admin-get-all-students/admin-get-all-student.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminGetAllParentsComponent,
    AdminGetAllTeachersComponent,
    TeacherAddComponent,
    TeacherUpdateComponent,
    ParentUpdateComponent,
    ParentAddComponent,
    AdminGetAllStudentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path:'admin', component:AdminComponent },
      { path:'admin/getAllParents', component:AdminGetAllParentsComponent },
      { path:'admin/getAllTeachers', component:AdminGetAllTeachersComponent },
      { path:'admin/getAllStudents', component: AdminGetAllStudentComponent },
      { path:'admin/teacher/add', component: TeacherAddComponent },
      { path:'admin/teacher/update', component: TeacherUpdateComponent },
      { path:'admin/parent/add', component: ParentAddComponent },
      { path:'admin/parent/update', component: ParentUpdateComponent }  
    ])
  ]
})
export class AdminModule { }
