import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

interface ExpiryData {
  expiryDate?: string;
  isExpired?: boolean;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  holder: ExpiryData;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.checkExpiryDate();
  }

  checkExpiryDate() {
    this.homeService.getCheckExpiryDate().subscribe(
      (data: ExpiryData) => {
        this.holder = data;
      },
      error => {
        // Error handling - could show user notification here
      }
    );
  }
}
