import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private httpClient: HttpClient) {}
  baseUrl = `http://localhost:3000/api/`;

  data: BehaviorSubject<any> = new BehaviorSubject([]);
  castData = this.data.asObservable();

  updateAllChildrenData(a: any) {
    this.data.next(a);
  }

  //login api
  login(body: any) {
    return this.httpClient.post(this.baseUrl + 'users/parentLogin', body);
  }

  //all children data api
  getAllChildrenData(body: any) {
    return this.httpClient.post(this.baseUrl + 'users/getChilds', body);
  }

  //get aall subjects

  getAllSubject(body: any) {
    return this.httpClient.post(
      this.baseUrl + 'class_subjects/getClassSubjects',
      body
    );
  }

  //attendance api
  getAttendanceData(body: any) {
    return this.httpClient.post(
      this.baseUrl + 'student_attendances/attendance',
      body
    );
  }
}
