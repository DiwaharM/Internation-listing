import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdsComponent } from './ads/ads.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
   {
       path: 'home-page',
       component: HomePageComponent
   },
   {
       path: 'ads',
       component: AdsComponent
   },
   {
     path: 'category',
     component: CategoryComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
