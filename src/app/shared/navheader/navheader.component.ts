import { Component, OnInit } from '@angular/core';
import { SubscribeUserService } from '../subscribe-user/subscribe-user.service';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedService } from '../shared.service';
import { Header } from '../navheader/header.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent implements OnInit {
  headers: Header;
  dropShow = false;
  constructor(private subScribeUserService: SubscribeUserService, public sharedService: SharedService,
              private router: Router, private route: ActivatedRoute) { }

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

  dropDownShow() {
    this.dropShow = !this.dropShow;
  }
 getHeader() {
   this.sharedService.getHeader().subscribe(data => {
     this.headers = data;
    /*  console.log(data); */
   }, error => {
     console.log(error);
   });
 }
 logOut() {
   sessionStorage.removeItem('businessLogIn');
   this.router.navigate(['/home/home-page']);
 }
}
