import { Component, OnInit } from '@angular/core';
import { getTreeControlMissingError } from '@angular/cdk/tree';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.css']
})
export class ViewListingComponent implements OnInit {

  constructor(private router: Router) { }
  arrayValue = [{companyName: ' Chennai Furniture ', categories: 'listing', country: 'america', rating: '4/10'},
  {companyName: 'Mumbai Garment', categories: 'mobile', country: 'china', rating: '6/10'},
  {companyName: 'Hyundai', categories: 'social', country: 'america', rating: '3/10'},
  {companyName: 'Tcs Software Solution', categories: 'tv', country: 'korea', rating: '6/10'},
  {companyName: 'Intel', categories: 'microprocessor', country: 'england', rating: '6/10'},
  {companyName: 'Rinteger', categories: 'MEANS tag', country: 'india', rating: '9/10'},
  {companyName: 'Ramraj', categories: 'software', country: 'india', rating: '7/10'}];
  ngOnInit() {
  }
  details() {
this.router.navigate(['listing/viewlistingdetail']);
  }
}
