import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusinessUserModel } from '../account-info/registration-business-user/business-user.model';
@Injectable({
  providedIn: 'root'
})
export class AddListingService {
  serviceUrl: string = AppSetting.serviceUrl;
  constructor(private http: HttpClient) { }
  getCategory() {
    const listUrl = 'getallcategory';
    const url: string = this.serviceUrl + listUrl;
    return this.http.get<BusinessUserModel>(url);
  }
  getSubCategory(data) {
    const listUrl = 'getselectedsubcategory';
    const url: string = this.serviceUrl + listUrl;
    return this.http.post<BusinessUserModel>(url, data);
  }
}
