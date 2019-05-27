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
}
