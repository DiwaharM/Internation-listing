import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  holder: any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.checkExpirtDate();
  }

  checkExpirtDate() {
    this.homeService.getCheckExpiryDate().subscribe(data => {
      this.holder = data;
    }, error => {
      console.log(error);
    });
  }
}
