import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewListingComponent } from './view-listing/view-listing.component';
import { ViewListingDetailsComponent } from './view-listing-details/view-listing-details.component';
import { VisitorsReportComponent } from './visitors-report/visitors-report.component';
import { ViewSearchListingComponent } from './view-search-listing/view-search-listing.component';


const routes: Routes = [
  {
    path: 'viewlisting/:id',
    component: ViewListingComponent
  },
  {
    path: 'viewlistingdetail/:id',
    component: ViewListingDetailsComponent
  },
  {
    path: 'visitorsreport/:id',
    component: VisitorsReportComponent
  },
  {
    path: 'viewsearchlisting',
    component: ViewSearchListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
