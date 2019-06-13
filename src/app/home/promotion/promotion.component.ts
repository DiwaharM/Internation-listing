import { Component, OnInit } from '@angular/core';
import { Promotion } from './promotion.model';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  promotionsModel: any;

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.getPromotion();
  }
  getPromotion() {
    this.homeService.getLisingWithGradeWise().subscribe(data => {
      this.promotionsModel = data;
       /* console.log(data); */
    }, error => {
      console.log(error);
    });
  }
  getData(data) {
    this.router.navigate(['listing/viewlistingdetail/', data._id]);
  }

}
