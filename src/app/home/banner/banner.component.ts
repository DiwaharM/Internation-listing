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

public logoClass = [
  {logoImage: '../../../assets/images/Logo/ISL LogoFinal.png'}
];

  icons = [{
    iconList: '../../../assets/images/IconsCategory/apparels-and-accessories.png',
     name1: 'Apparels &  Accessories'},
  { iconList: '../../../assets/images/IconsCategory/food-and-beverages.png', name2: ' Food & Beverages' },
  { iconList: '../../../assets/images/IconsCategory/health.png', name3: 'Beauty & Wellness' },
  { iconList: '../../../assets/images/IconsCategory/logistics-services.png', name4: 'Education' },
  { iconList: '../../../assets/images/IconsCategory/printing-and-stationaries.png', name6: 'Health' },
  { iconList: '../../../assets/images/IconsCategory/wedding-and-events.png', name5: 'Wedding & Events' },
  { iconList: '../../../assets/images/IconsCategory/wedding-and-events.png', name7: 'Logistics Services' },
  { iconList: '../../../assets/images/IconsCategory/wedding-and-events.png', name8: 'Printing & Stationaries' }
  ];

public oneStyle = {
 'font-size': '12px',
 color: 'white',
 margin: '8px',
 width: '82px',
 'font-family': 'Expert Sans'

};
public twoStyle = {
  'font-size': '12px',
  color: 'white',
  margin: '8px',
  width: '82px',
'padding-left': '10px',
'font-family': 'Expert Sans'
 };

  public bannerStyle = {
    width: '100%',
    height: 'auto',
    filter: 'blur(0px)',

  };

  public threeStyle = {
    'font-size': '12px',
    color: 'white',
    margin: '8px',
    width: '82px',
  'padding-left': '6px',
  'font-family': 'Expert Sans'
   };














  
  banners: Banner[];
  slideIndex = 0;
  bannerModel: Banner[];
  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.getBanner();
  }
  submit(value) {
    this.router.navigate(['listing/viewsearchlisting'], { queryParams: { order: value } });
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
