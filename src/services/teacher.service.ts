import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAttendance } from 'src/models/attendance';
import { IConcern } from 'src/models/concern';
import { IDiary } from 'src/models/diary';
import { IExam } from 'src/models/exam';
import { IReportCard } from 'src/models/reportCard';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  token=localStorage.getItem('token');
  headers_object=new HttpHeaders().set("Authorization", "Bearer " +this.token);

  private apiServerUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addExamDetails(exam: IExam, sId: string): Observable<IExam> {
    let param = new HttpParams().set("standardIdList", sId);
    return this.http.post<IExam>(`${this.apiServerUrl}teacher/exam/add`, exam,
      { params: param, headers:this.headers_object });
  }

  updateExamDetails(exam: IExam, sId: string): Observable<IExam> {
    let param = new HttpParams().set("standardIdList", sId);
    return this.http.put<IExam>(`${this.apiServerUrl}teacher/exam/update`, exam,
      { params: param, headers:this.headers_object });
  }

  addReportCardDetails(reportCard: IReportCard, sId: string): Observable<IReportCard> {
    let param = new HttpParams().set("studentdId", sId);
    return this.http.post<IReportCard>(`${this.apiServerUrl}teacher/reportCard/add`, reportCard,
      { params: param,
       headers:this.headers_object});
  }

  updateReportCardDetails(reportCard: IReportCard, sId: string): Observable<IReportCard> {
    let param = new HttpParams().set("studentdId", sId);
    return this.http.put<IReportCard>(`${this.apiServerUrl}teacher/reportCard/update`, reportCard,
      { params: param, headers:this.headers_object });
  }

  addAttendanceDetails(attendance: IAttendance, sId: string): Observable<IAttendance> {
    let param = new HttpParams().set("studentId", sId);
    return this.http.post<IAttendance>(`${this.apiServerUrl}teacher/attendance/add`, attendance,
      { params: param, headers:this.headers_object });
  }

  updateAttendanceDetails(attendance: IAttendance, sId: string): Observable<IAttendance> {
    let param = new HttpParams().set("studentId", sId);
    return this.http.put<IAttendance>(`${this.apiServerUrl}teacher/attendance/update`, attendance,
      { params: param, headers:this.headers_object });;

  }

  addDailyDiaryDetails(diary: IDiary, studentId: string): Observable<IDiary> {
    let param = new HttpParams().set("studentId", studentId);
    return this.http.post<IDiary>(`${this.apiServerUrl}teacher/dailyDiary/add`, diary,
      { params: param,
      headers:this.headers_object });
  }

  updateDailyDiaryDetails(diary: IDiary, sId: string): Observable<IDiary> {
    let param = new HttpParams().set("studentId", sId);
    return this.http.put<IDiary>(`${this.apiServerUrl}teacher/dailyDiary/update`, diary,
      { params: param, headers:this.headers_object });
  }

  updateConcernDetails(concern: IConcern, pId: string): Observable<IConcern> {
    let param = new HttpParams().set("parentId", pId);
    return this.http.put<IConcern>(`${this.apiServerUrl}teacher/concern/status`, concern,
      { params: param, headers:this.headers_object });
  }
}