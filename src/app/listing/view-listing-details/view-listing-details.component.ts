import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ListingService } from '../listing.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from './review.model';
import { BusinessUserModel } from '../../account-info/registration-business-user/business-user.model';
import { CustomerLog } from '../../account-info/registration-business-user/cutomerlog.model';

@Component({
  selector: 'app-view-listing-details',
  templateUrl: './view-listing-details.component.html',
  styleUrls: ['./view-listing-details.component.css']
})
export class ViewListingDetailsComponent implements OnInit {
  id: string;
  listingModel: any;
  listingForm: FormGroup;
  usingID: string;
  userName: any;
  listModel: any;
  reviewModel: any;
  similarID: any;
  company: any;
  userID: string;
  customerID: any;
  customerDetail: BusinessUserModel;
  temp1: CustomerLog;
  temp2: BusinessUserModel;
  counting: any;
  showcounting = false;
  idValue: any;

  constructor(private route: ActivatedRoute, private router: Router,
              private listingService: ListingService, private fb: FormBuilder) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }

  ngOnInit() {
    /*    this.getUserName(); */
    this.getSelectedListing();
    /* this.getUserDetail(); */
    /*  this.getAllReview(); */
  }
  getSelectedListing() {
    this.listingService.getSelectedListing(this.id).subscribe(data => {
      this.similarID = data[0].category;
      this.listingModel = data;
      this.idValue = data[0];
      this.getSimilarCompany(this.similarID);
      this.getAllReview();
      this.getUserName();
      this.getCustomerLog();
      this.getUserDetail();
       /* console.log(this.listingModel); */
    }, err => {
      console.log(err);
    });
  }
  getUserDetail() {
    this.userID = sessionStorage.getItem('userID');
    console.log(this.userID);
    console.log(this.idValue);
    if (sessionStorage.getItem('businessLogIn') && this.userID === this.idValue._id) {
      this.showcounting = true;
    } else {
      this.showcounting = false;
    }
  }
  postReview(title, description) {
    this.listModel = new Review();
    this.listModel.reviewTitle = title;
    this.listModel.reviewDescription = description;
    this.listModel.userName = this.userName;
    this.listModel.listingName = this.listingModel[0].companyName;
    this.listModel.listingID = this.listingModel[0]._id;
    this.listingService.createReview(this.listModel).subscribe(data => {
      /*  console.log(data); */
      this.getAllReview();
    }, err => {
      console.log(err);
    });
  }
  getUserName() {
    if (sessionStorage.getItem('businessLogIn')) {
      this.usingID = sessionStorage.getItem('userID');
      this.listingService.getBusinessUserName(this.usingID).subscribe(data => {
        this.userName = data.firstName;
        /* console.log('logger', data); */
      });

    } else {
      this.usingID = sessionStorage.getItem('subID');
      this.listingService.getSubscriberUserName(this.usingID).subscribe(data => {
        this.userName = data.firstName;
        /*  console.log('subscriber', data); */
      });
    }
  }
  getAllReview() {
    this.listingService.getSelectedReviews(this.id).subscribe(data => {
      this.reviewModel = data;
      /* console.log(this.listingModel); */
      /*   console.log(data); */
    }, err => {
      console.log(err);
    });
  }
  getSimilarCompany(id) {
    this.listingService.getSimilarCompany(id).subscribe(data => {
      this.company = data;
    }, error => {
      console.log(error);
    });
  }
  getSelectedCompany(data) {
    this.router.navigate(['listing/viewlistingdetail/', data._id]);
    this.id = data._id;
    this.getSelectedListing();
  }
  getCustomerLog() {
    if (sessionStorage.getItem('businessLogIn')) {
      this.userID = sessionStorage.getItem('userID');
    } else {
      this.userID = sessionStorage.getItem('subID');
    }
    if (this.userID === this.listingModel[0]._id) {
   /*    console.log('exist'); */
      this.getVisitorCounting();
    } else {
      this.customerID = new CustomerLog();
      this.customerID.customerID = this.userID;
      this.customerID.date = new Date().toISOString().slice(0, 10);
      this.customerDetail = new BusinessUserModel();
      this.customerDetail.customerLogs = this.customerID;
      this.listingService.getCustomerViewCount(this.customerDetail, this.id).subscribe(data => {
        /* console.log(data); */
        this.getVisitorCounting();
      }, error => {
        console.log(error);
      });
    }
  }
  getVisitorCounting() {
    this.temp1 = new CustomerLog();
    this.temp1.date = new Date().toISOString().slice(0, 10);
    this.listingService.getVistiorCount(this.temp1, this.listingModel[0]._id).subscribe(data => {
      this.counting = data;
     /*  console.log(data); */
    }, error => {
      console.log(error);
    });
  }
  getFullDetail() {
    /* console.log(this.listingModel[0]._id); */
    this.router.navigate(['listing/visitorsreport/', this.listingModel[0]._id]);
  }
}
