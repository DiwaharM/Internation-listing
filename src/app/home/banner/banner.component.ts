import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Banner } from './banner.model';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banners: Banner[];
  slideIndex = 0;
  bannerModel: Banner[];
  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.getBanner();
  }
  submit(value) {
    this.router.navigate(['listing/viewlisting'], { queryParams: { order: 'popular' } });
  }
  minusSlides(n) {
    const min = --n;
    if (min < 0) {
      this.slideIndex = this.banners.length - 1;
    } else {
      this.slideIndex = min;
    }
  }
  plusSlides(n) {
    if (this.banners.length - 1 < n || this.banners.length - 1 <= n) {
      this.slideIndex = 0;
    } else {
      this.slideIndex = ++n;
    }
  }
  getBanner() {
    this.homeService.getBanner().subscribe(data => {
      this.banners = data;
      /* console.log(data); */
    }, error => {
      console.log(error);
    });
  }

}
