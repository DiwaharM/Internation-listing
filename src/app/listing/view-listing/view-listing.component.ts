import { Component, OnInit } from '@angular/core';
import { getTreeControlMissingError } from '@angular/cdk/tree';

@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.css']
})
export class ViewListingComponent implements OnInit {

  constructor() { }
  arrayValue = [{companyName: 'google', categories: 'listing', country: 'america', rating: '4/10'},
  {companyName: 'nokia', categories: 'mobile', country: 'china', rating: '6/10'},
  {companyName: 'facebook', categories: 'social', country: 'america', rating: '3/10'},
  {companyName: 'samsung', categories: 'tv', country: 'korea', rating: '6/10'},
  {companyName: 'intel', categories: 'microprocessor', country: 'england', rating: '6/10'},
  {companyName: 'rinteger', categories: 'MEANS tag', country: 'india', rating: '9/10'},
  {companyName: 'tcs', categories: 'software', country: 'india', rating: '7/10'}];
  ngOnInit() {
  }

}
