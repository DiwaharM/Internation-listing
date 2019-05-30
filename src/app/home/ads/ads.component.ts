import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  adsModel: any;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getAllAds();
  }

  getAllAds() {
    this.homeService.getAds().subscribe(data => {
      console.log(data);
      this.adsModel = data;
    }, error => {
      console.log(error);
    });
  }
}
