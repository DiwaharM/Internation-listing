import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { Header } from './navheader/header.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Footer } from './footer/footer.model';

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
  getLogin() {
    return sessionStorage.getItem('businessLogIn');
  }
  getUserId() {
    return sessionStorage.getItem('userID');
  }
  getFooter(): Observable<any> {
    const sharedUrl = 'getfooter';
    const url: string = this.serviceUrl + sharedUrl;
    return this.http.get<Footer>(url);
  }
}
