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

public logoStyle = {
  width: '100px',
  height: '70px',
  margin: '5px',
  'padding-left': '30px',
};

navbarShow = false;
  headers: Header;
  dropShow = false;
  busUserID: string;
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
  toggleNavbar() {
    this.navbarShow = !this.navbarShow;
  }

  dropDownShow() {
    this.dropShow = !this.dropShow;
  }
  getHeader() {
    this.busUserID = sessionStorage.getItem('userID');
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
