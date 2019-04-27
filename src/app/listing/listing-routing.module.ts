import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewListingComponent } from './view-listing/view-listing.component';
import { ViewListingDetailsComponent } from './view-listing-details/view-listing-details.component';



const routes: Routes = [
   {
       path: 'viewlisting',
       component: ViewListingComponent
   },
   {
     path: 'viewlistingdetail',
     component: ViewListingDetailsComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
