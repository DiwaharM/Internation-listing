import { Component, OnInit } from '@angular/core';
import { Promotion } from './promotion.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  promotionsModel: any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getPromotion();
  }
  getPromotion() {
    this.homeService.getLisingWithGradeWise().subscribe(data => {
      this.promotionsModel = data;
console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
