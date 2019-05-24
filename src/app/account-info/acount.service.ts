import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusinessUserModel } from './registration-business-user/business-user.model';
@Injectable({
  providedIn: 'root'
})
export class AcountService {
  serviceUrl: string = AppSetting.serviceUrl;
  constructor(private http: HttpClient) { }
  createBussUser(data): Observable<any> {
    const accUrl = 'createbusinessuser';
    const url: string = this.serviceUrl + accUrl;
    return this.http.post<BusinessUserModel>(url, data);
  }
}
