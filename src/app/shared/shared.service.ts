import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { Header } from './navheader/header.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  serviceUrl: string = AppSetting.serviceUrl;
  constructor(private http: HttpClient) { }

  getHeader(): Observable<any> {
    const sharedUrl = 'getheader';
    const url: string = this.serviceUrl + sharedUrl;
    return this.http.get<Header>(url);
  }

  customerSubscribe(data): Observable<any> {
    const sharedUrl = 'makesubscribe';
    const url: string = this.serviceUrl + sharedUrl;
    return this.http.post<Header>(url, data);
  }
}
