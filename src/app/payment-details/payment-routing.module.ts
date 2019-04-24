import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaymentPackagesComponent } from './payment-packages/payment-packages.component';

const routes: Routes = [
    {
        path: 'payment-package',
        component: PaymentPackagesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
