import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationUserComponent } from '../account-info/registration-user/registration-user.component';
import { RegistrationBusinessUserComponent } from './registration-business-user/registration-business-user.component';
import { LoginBusinessUserComponent } from './login-business-user/login-business-user.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
