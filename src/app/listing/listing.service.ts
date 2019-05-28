import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  serviceUrl: string = AppSetting.serviceUrl;
  constructor(private http: HttpClient) { }
  getListing(id): Observable<any> {
    const sharedUrl = 'getlistinglist/';
    const url: string = this.serviceUrl + sharedUrl + id;
    return this.http.get<any>(url);
  }
  getSelectedListing(id): Observable<any> {
    const sharedUrl = 'getselectedlistinglist/';
    const url: string = this.serviceUrl + sharedUrl + id;
    return this.http.get<any>(url);
  }
  getBusinessUserName(id): Observable<any> {
    const sharedUrl = 'getbusinessusername/';
    const url: string = this.serviceUrl + sharedUrl + id;
    return this.http.get<any>(url);
  }
  getSubscriberUserName(id): Observable<any> {
    const sharedUrl = 'getsubscriberusername/';
    const url: string = this.serviceUrl + sharedUrl + id;
    return this.http.get<any>(url);
  }
  createReview(data): Observable<any> {
    const sharedUrl = 'createreview';
    const url: string = this.serviceUrl + sharedUrl;
    return this.http.post<any>(url, data);
  }
  getSelectedReviews(id): Observable<any> {
    const sharedUrl = 'getselectedreviews/';
    const url: string = this.serviceUrl + sharedUrl + id;
    return this.http.get<any>(url);
  }
}
