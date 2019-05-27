import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ListingService } from '../listing.service';
@Component({
  selector: 'app-view-listing-details',
  templateUrl: './view-listing-details.component.html',
  styleUrls: ['./view-listing-details.component.css']
})
export class ViewListingDetailsComponent implements OnInit {
  id: string;
  listingModel: string;
  constructor(private route: ActivatedRoute, private router: Router, private listingService: ListingService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
   }

  ngOnInit() {
    this.getSelectedListing();
  }
  getSelectedListing() {
    this.listingService.getSelectedListing(this.id).subscribe(data => {
    /*   console.log(data); */
    this.listingModel = data;
    }, error => {
      console.log(error);
    });
  }

}
