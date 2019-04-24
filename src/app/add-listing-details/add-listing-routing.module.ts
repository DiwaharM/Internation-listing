import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddCompanyDetailsComponent } from './add-company-details/add-company-details.component';

const routes: Routes = [
  {
      path: 'addcompanydetail',
      component: AddCompanyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddListingRoutingModule { }
