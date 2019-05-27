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
  businessLogin(data): Observable<any> {
    const accUrl = 'businesslogin';
    const url: string = this.serviceUrl + accUrl;
    return this.http.post<BusinessUserModel>(url, data);
  }
  getProfil(id): Observable<any> {
    const accUrl = 'getselectedbusinessuser/';
    const url: string = this.serviceUrl + accUrl + id;
    return this.http.get<BusinessUserModel>(url);
  }
  uploadCompanyImages(data, id): Observable<any> {
    const accUrl = 'uploadcompanyimage/';
    const url: string = this.serviceUrl + accUrl + id;
    return this.http.post<BusinessUserModel>(url, data);
  }
  getPackage(id): Observable<any> {
    const accUrl = 'getselectedpackage/';
    const url: string = this.serviceUrl + accUrl + id;
    return this.http.get<BusinessUserModel>(url);
  }
  updateProfil(data, id): Observable<any> {
    const accUrl = 'updateprofile/';
    const url: string = this.serviceUrl + accUrl + id;
    return this.http.post<BusinessUserModel>(url, data);
  }
  updateProfilLogo(data, id): Observable<any> {
    const accUrl = 'createlogoimage/';
    const url: string = this.serviceUrl + accUrl + id;
    return this.http.put<BusinessUserModel>(url, data);
  }
}
