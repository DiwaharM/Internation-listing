import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationUserComponent } from '../account-info/registration-user/registration-user.component';
import { RegistrationBusinessUserComponent } from './registration-business-user/registration-business-user.component';
import { LoginBusinessUserComponent } from './login-business-user/login-business-user.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ProfileComponent } from './profile/profile.component';
import { CompanyImagesComponent } from './company-images/company-images.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';


const routes: Routes = [
  {
    path: 'reg-user',
    component: RegistrationUserComponent
  },
  {
    path: 'reg-business',
    component: RegistrationBusinessUserComponent
  },
  {
    path: 'login-business',
    component: LoginBusinessUserComponent
  },
  {
    path: '',
    component: AccountDetailsComponent,
    children: [ {
      path: 'profile',
      component: ProfileComponent
    },
  {
    path: 'companyimage',
    component: CompanyImagesComponent
  },
{
  path: 'packageDetail',
  component: PackageDetailComponent
}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
