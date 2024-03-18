import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private httpClient: HttpClient) {}

  data: BehaviorSubject<any> = new BehaviorSubject([]);
  castData = this.data.asObservable();

  updateAllChildrenData(a: any) {
    this.data.next(a);
  }

  login(body: any) {
    console.log(body);
    return this.httpClient.post('endPoint', body);
  }
}
