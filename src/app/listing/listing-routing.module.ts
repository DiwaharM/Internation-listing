import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewListingComponent } from './view-listing/view-listing.component';



const routes: Routes = [
   {
       path: 'viewlisting',
       component: ViewListingComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
