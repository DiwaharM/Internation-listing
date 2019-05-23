import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { Banner } from './banner/banner.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  serviceUrl: string = AppSetting.serviceUrl;
  constructor(private http: HttpClient) { }

  getBanner(): Observable<any> {
    const sharedUrl = 'getbanner';
    const url: string = this.serviceUrl + sharedUrl;
    return this.http.get<Banner>(url);
  }
}
