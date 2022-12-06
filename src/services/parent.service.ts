import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAttendance } from 'src/models/attendance';
import { IConcern } from 'src/models/concern';
import { IDiary } from 'src/models/diary';
import { IExam } from 'src/models/exam';
import { IFee } from 'src/models/fee';
import { IReportCard } from 'src/models/reportCard';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  
  token=localStorage.getItem('token');
  headers_object=new HttpHeaders().set("Authorization", "Bearer " +this.token);

  private apiServerUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getReportCardDetails(sId: number): Observable<IReportCard> {
    return this.http.get<IReportCard>(`${this.apiServerUrl}parent/student/reportCard/${sId}`,
    {headers:this.headers_object});
  }

  getFee(sId: number): Observable<IFee> {
    return this.http.get<IFee>(`${this.apiServerUrl}parent/student/fee/${sId}`,
    {headers:this.headers_object});
  }
  
  getExamDetails(date: Date): Observable<IExam> {
    return this.http.get<IExam>(`${this.apiServerUrl}parent/student/exam/${date}`,
    {headers:this.headers_object});
  }

  getDialyDiary(sId: number): Observable<IDiary> {
    return this.http.get<IDiary>(`${this.apiServerUrl}parent/student/diary/${sId}`,
    {headers:this.headers_object});
  }

  getAttendance(sId: number): Observable<IAttendance> {
    console.log(this.token);
    return this.http.get<IAttendance>(`${this.apiServerUrl}parent/student/attendance/${sId}`,
    {headers:this.headers_object});
  }

  addConcern(concern: IConcern, pId: string): Observable<IConcern> {
    let param = new HttpParams().set("parentId", pId);
    return this.http.post<IConcern>(`${this.apiServerUrl}parent/concern/add`, concern,
    {params: param,
    headers:this.headers_object});
  }
}
