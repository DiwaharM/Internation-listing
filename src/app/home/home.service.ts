import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { Banner } from './banner/banner.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category/category.model';
import { Promotion } from './promotion/promotion.model';
import { Ads } from './ads/ads.model';
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
  getCategory(): Observable<any> {
    const listUrl = 'getallcategory';
    const url: string = this.serviceUrl + listUrl;
    return this.http.get<Category>(url);
  }
  getLisingWithGradeWise(): Observable<any> {
    const listUrl = 'getalllistinggradewise';
    const url: string = this.serviceUrl + listUrl;
    return this.http.get<Promotion>(url);
  }
  getAds(): Observable<any> {
    const listUrl = 'getads';
    const url: string = this.serviceUrl + listUrl;
    return this.http.get<Ads>(url);
  }
}
