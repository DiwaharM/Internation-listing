import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddCompanyDetailsComponent } from './add-company-details/add-company-details.component';
import { BusinessUserListingComponent } from './business-user-listing/business-user-listing.component';
import { AuthGuard } from '../shared/auth.guard';

const routes: Routes = [
  {
    path: 'addcompanydetail',
    component: AddCompanyDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viewlisting',
    component: BusinessUserListingComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddListingRoutingModule { }
