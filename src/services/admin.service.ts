import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IParent } from 'src/models/parent';
import { IStandard } from 'src/models/standard';
import { IStudent } from 'src/models/student';
import { ITeacher } from 'src/models/teacher';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiServerUrl = environment.baseUrl;

  token=localStorage.getItem('token');
  headers_object=new HttpHeaders().set("Authorization", "Bearer " +this.token);
  
  constructor(private http: HttpClient) { }

  addParentDetails(parent:IParent):Observable<IParent>{
    return this.http.post<IParent>(`${this.apiServerUrl}admin/parent/add`,parent,
    {headers:this.headers_object});
  }

  updateParentDetails(parent:IParent,sId:string):Observable<IParent>{
    let param=new HttpParams().set('studentIdList',sId);
    return this.http.put<IParent>(`${this.apiServerUrl}admin/parent/update`,parent,
    {params:param,
      headers:this.headers_object});
  }

  getAllParent():Observable<IParent[]>{
    
    return this.http.get<IParent[]>(`${this.apiServerUrl}admin/parent/getParents`,
    {headers:this.headers_object});
  }
  
  addStudentDetails(student:IStudent):Observable<IStudent>{
    return this.http.post<IStudent>(`${this.apiServerUrl}admin/student/add`,student,
    {headers:this.headers_object});
  }

  updateStudentDetails(student:IStudent):Observable<IStudent>{
    return this.http.put<IStudent>(`${this.apiServerUrl}admin/student/update`,student,
    {headers:this.headers_object});
  }
  
  getAllStudent():Observable<IStudent[]>{
    return this.http.get<IStudent[]>(`${this.apiServerUrl}admin/student/getStudents`,
    {headers:this.headers_object});
  }

  addTeacherDetails(teacher:ITeacher):Observable<ITeacher>{
    return this.http.post<ITeacher>(`${this.apiServerUrl}admin/teacher/add`,teacher,
    {headers:this.headers_object});
  }

  updateTeacherDetails(teacher:ITeacher,sIdList:string,sId:string):Observable<ITeacher>{
    let param=new HttpParams().set('standardIdList',sIdList).set('standardId',sId);
  
    return this.http.put<ITeacher>(`${this.apiServerUrl}admin/teacher/update`,teacher,
    {params:param,
    headers:this.headers_object}); 
  }

  getAllTeacher():Observable<ITeacher[]>{
    return this.http.get<ITeacher[]>(`${this.apiServerUrl}admin/teacher/getTeachers`,
    {headers:this.headers_object});
  }

  // addStandardDetails(standard:IStandard):Observable<IStandard>{
  //   return this.http.post<IStandard>(`${this.apiServerUrl}/admin/standard/add`,standard,
  //   {headers:this.headers_object});
  // }

  // updateStandardDetails(standard:IStandard,sIdList:number[]):Observable<IStandard>{
  //   return this.http.put<IStandard>(`${this.apiServerUrl}admin/standard/update`,[standard,sIdList],
  //   {headers:this.headers_object});
  // }
}
