import { Component, OnInit } from '@angular/core';
import { SubscribeUserService } from '../subscribe-user/subscribe-user.service';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedService } from '../shared.service';
import { Header } from '../navheader/header.model';
@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent implements OnInit {
  headers: Header;

  constructor(private subScribeUserService: SubscribeUserService, private sharedService: SharedService) { }

  ngOnInit() {
    this.getHeader();
  }
  getSubscrbe() {
    this.subScribeUserService.openCustomer()
      .subscribe(res => {
        if (res) {
        console.log(res);
        }
      });
  }
 getHeader() {
   this.sharedService.getHeader().subscribe(data => {
     this.headers = data;
    /*  console.log(data); */
   }, error => {
     console.log(error);
   })
 }
}
