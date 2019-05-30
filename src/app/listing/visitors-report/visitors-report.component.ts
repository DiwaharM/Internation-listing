import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ListingService } from '../listing.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from '../view-listing-details/review.model';
import { CustomerLog } from '../../account-info/registration-business-user/cutomerlog.model';

@Component({
  selector: 'app-visitors-report',
  templateUrl: './visitors-report.component.html',
  styleUrls: ['./visitors-report.component.css']
})
export class VisitorsReportComponent implements OnInit {
  id: string;
  reportModel: any;
  temp1: any;
  showBusiness = false;
  showPublic = false;
  selectBusinessUser = ['Today Viewed', 'Totally Viewed'];
  customer = ['Business User', 'Public User'];
  selectPublicUser = ['TodayViewed', 'Totally Viewed'];

  constructor(private route: ActivatedRoute, private router: Router,
              private listingService: ListingService, private fb: FormBuilder) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }

  ngOnInit() {
    this.getSelectedReport();
  }
  getSelectedReport() {
    this.listingService.getSelectedReport(this.id).subscribe(data => {
      this.reportModel = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  getSelectedCurrentReport() {
    this.temp1 = new CustomerLog();
    this.temp1.date = new Date().toISOString().slice(0, 10);
    this.listingService.getSelectedCurrentReport(this.temp1, this.id).subscribe(data => {
      this.reportModel = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  geSubscriberSelectedReport() {
    this.listingService.getSubscriberSelectedReport(this.id).subscribe(data => {
      this.reportModel = data;
      /*   console.log(data); */
    }, error => {
      console.log(error);
    });
  }
  getSubscriberSelectedCurrentReport() {
    this.temp1 = new CustomerLog();
    this.temp1.date = new Date().toISOString().slice(0, 10);
    this.listingService.getSubscriberSelectedCurrentReport(this.temp1, this.id).subscribe(data => {
      this.reportModel = data;
      /*  console.log(data); */
    }, error => {
      console.log(error);
    });
  }
  ChangesBusiness(e) {
    if (e.value === 'Today Viewed') {
      this.getSelectedCurrentReport();
    } else {
      this.getSelectedReport();
    }
  }
  ChangesPublic(e) {
    if (e.value === 'Today Viewed') {
      this.getSubscriberSelectedCurrentReport();
    } else {
      this.geSubscriberSelectedReport();
    }
  }
  ChangesCustomer(e) {
    if (e.value === 'Business User') {
      this.showBusiness = true;
      this.showPublic = false;
    } else {
      this.showBusiness = false;
      this.showPublic = true;
    }
  }
}
