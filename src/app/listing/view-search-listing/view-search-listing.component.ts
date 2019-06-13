import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { ListingService } from '../listing.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-search-listing',
  templateUrl: './view-search-listing.component.html',
  styleUrls: ['./view-search-listing.component.css']
})
export class ViewSearchListingComponent implements OnInit {
  order: any;
  temp: any;
  listingModel: any;
  public pageSize = 50;
  public currentPage = 0;
  public totalSize = 0;
  public array: any;
  @ViewChild('MatPaginator') paginator: MatPaginator;

  constructor(private router: Router, private route: ActivatedRoute,
              private listingService: ListingService, private snackBar: MatSnackBar) {  
  }

  ngOnInit() {
    this.temp =  this.route.snapshot.queryParamMap.get('order');
    this.getSearch();
  }
  getSearch() {
    this.listingService.getSearch(this.temp).subscribe(data => {
      this.listingModel = data;
      console.log(data);
      this.listingModel = new MatTableDataSource<any>(data);
      this.listingModel.paginator = this.paginator;
      this.array =  this.listingModel;
      this.listingModel = data;
      this.totalSize = this.array.length;
      this.iterator();
    /*   console.log(data); */
    }, error => {
      console.log(error);
    });
  }
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }
  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.listingModel = part;
  }
  details(data) {
    if (sessionStorage.getItem('businessLogIn') || sessionStorage.getItem('subscribe')) {
      this.router.navigate(['listing/viewlistingdetail/', data._id]);
    } else {
      this.snackBar.open('Please subscribe', 'OK', { duration: 1000, panelClass: ['blue-snackbar'] });

    }
  }
}
