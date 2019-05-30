import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.css']
})
export class ViewListingComponent implements OnInit {
  id: string;
  listingModel: any;
  constructor(private router: Router, private route: ActivatedRoute,
              private listingService: ListingService, private snackBar: MatSnackBar) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }
  /*   arrayValue = [{companyName: ' Chennai Furniture ', categories: 'listing', country: 'america', rating: '4/10'},
    {companyName: 'Mumbai Garment', categories: 'mobile', country: 'china', rating: '6/10'},
    {companyName: 'Hyundai', categories: 'social', country: 'america', rating: '3/10'},
    {companyName: 'Tcs Software Solution', categories: 'tv', country: 'korea', rating: '6/10'},
    {companyName: 'Intel', categories: 'microprocessor', country: 'england', rating: '6/10'},
    {companyName: 'Rinteger', categories: 'MEANS tag', country: 'india', rating: '9/10'},
    {companyName: 'Ramraj', categories: 'software', country: 'india', rating: '7/10'}]; */
  ngOnInit() {
    this.getLisitingById();
  }
  details(data) {
    if (sessionStorage.getItem('businessLogIn') || sessionStorage.getItem('subscribe')) {
      this.router.navigate(['listing/viewlistingdetail/', data._id]);
    } else {
      this.snackBar.open('Please subscribe', 'OK', { duration: 1000, panelClass: ['blue-snackbar'] });

    }
  }
  getLisitingById() {
    this.listingService.getListing(this.id).subscribe(data => {
      /*  console.log(data); */
      this.listingModel = data;
    }, error => {
      console.log(error);
    });
  }


}
