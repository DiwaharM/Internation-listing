import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: './account-info/account.module#AccountModule'
  },
  {
    path: 'payment',
    loadChildren: './payment-details/payment-detail.module#PaymentModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'add-listing',
    loadChildren: './add-listing-details/add-listing.module#AddListingModule'
  },
  {
    path: 'listing',
    loadChildren: './listing/listing.module#ListingModule'
  },
  {
    path: '',
    redirectTo: 'home/home-page',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
