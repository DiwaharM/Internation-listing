import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusinessUserModel } from './registration-business-user/business-user.model';
import {PaymentDetail} from './registration-business-user/paymentDetail.model';
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
  changePassword(pass, id): Observable<any> {
    const accUrl = 'changepassword/';
    const url: string = this.serviceUrl + accUrl + id;
    return this.http.post<BusinessUserModel>(url, pass);
  }
  getAllPaymentPackage(): Observable<any> {
    const accUrl = 'getallpaymentpackage';
    const url: string = this.serviceUrl + accUrl ;
    return this.http.get<BusinessUserModel>(url);
  }
  getClientToken(): Observable<any> {
    const accUrl = 'clienttoken';
    const url: string = this.serviceUrl + accUrl ;
    return this.http.get<BusinessUserModel>(url);
  }

  // add razorpay response

  addRazorpayResponse(data, id): Observable<any> {
    const accUrl = 'addrazorpay/';
    const url: string = this.serviceUrl + accUrl + id;
    return this.http.put<PaymentDetail>(url, data);
  }

  getCategory(): Observable<any> {
    const listUrl = 'getallcategory';
    const url: string = this.serviceUrl + listUrl;
    return this.http.get<BusinessUserModel>(url);
  }
  getSubCategory(data): Observable<any> {
    const listUrl = 'getselectedsubcategory';
    const url: string = this.serviceUrl + listUrl;
    return this.http.post<BusinessUserModel>(url, data);
  }
  updateCompanyDetails(data, id): Observable<any> {
    const listUrl = 'updatecompanydetails/';
    const url: string = this.serviceUrl + listUrl + id;
    return this.http.post<BusinessUserModel>(url, data);
  }
  deleteCompanyImage(data, id): Observable<any> {
    const listUrl = 'deletecompanyimgae/';
    const url: string = this.serviceUrl + listUrl + id;
    return this.http.post<BusinessUserModel>(url, data);
  }
}
