import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from './category.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryModel: any;
  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.getAllCategory();
  }
getAllCategory() {
  this.homeService.getCategory().subscribe(data => {
    /* console.log(data); */
    this.categoryModel = data;
  }, error => {
    console.log(error);
  });
}
getCategory(data) {
  this.router.navigate(['listing/viewlisting/', data._id]);
}

}
