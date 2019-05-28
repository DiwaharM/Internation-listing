import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ListingService } from '../listing.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from './review.model';

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

  constructor(private route: ActivatedRoute, private router: Router,
              private listingService: ListingService, private fb: FormBuilder) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
   }

  ngOnInit() {
    this.getUserName();
    this.getSelectedListing();
    this.getAllReview();
  }
  getSelectedListing() {
    this.listingService.getSelectedListing(this.id).subscribe(data => {
    /*   console.log(data); */
    this.listingModel = data;
    }, err => {
      console.log(err);
    });
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
        this.userName = data.userName;
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
}
