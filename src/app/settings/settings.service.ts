import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TermsModel } from './terms-and-use/terms.model';
import { PrivacyPolicyModel } from './privacy-policy/privacy-policy.model';
import { Support } from './support/support.model';
import { ContactUs } from './contact-us/contact-us.model';
import { FAQ } from './faq/faq.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  serviceUrl: string = AppSetting.serviceUrl;
  constructor(private http: HttpClient) { }
  getTermsAndUse(): Observable<any> {
    const sharedUrl = 'gettermsanduse';
    const url: string = this.serviceUrl + sharedUrl;
    return this.http.get<TermsModel>(url);
  }
  getPrivacyPolicy(): Observable<any> {
    const sharedUrl = 'getprivacypolicy';
    const url: string = this.serviceUrl + sharedUrl;
    return this.http.get<PrivacyPolicyModel>(url);
  }
  getSupport(): Observable<any> {
    const sharedUrl = 'getsupport';
    const url: string = this.serviceUrl + sharedUrl;
    return this.http.get<Support>(url);
  }
  getContact(): Observable<any> {
    const sharedUrl = 'getcontact';
    const url: string = this.serviceUrl + sharedUrl;
    return this.http.get<ContactUs>(url);
  }
  getFaq(): Observable<any> {
    const sharedUrl = 'getfaq';
    const url: string = this.serviceUrl + sharedUrl;
    return this.http.get<FAQ>(url);
  }
}
