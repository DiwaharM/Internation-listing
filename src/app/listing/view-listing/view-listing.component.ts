import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { ListingService } from '../listing.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.css']
})
export class ViewListingComponent implements OnInit {
  id: string;
  listingModel: any;
  order: any;
  public pageSize = 50;
  public currentPage = 0;
  public totalSize = 0;
  public array: any;
  @ViewChild('MatPaginator') paginator: MatPaginator;

  constructor(private router: Router, private route: ActivatedRoute,
              private listingService: ListingService, private snackBar: MatSnackBar) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }
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
      this.listingModel = new MatTableDataSource<any>(data);
      this.listingModel.paginator = this.paginator;
      this.array =  this.listingModel;
      this.listingModel = data;
      this.totalSize = this.array.length;
      this.iterator();
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

}
