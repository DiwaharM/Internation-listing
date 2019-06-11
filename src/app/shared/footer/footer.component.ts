import { Component, OnInit } from '@angular/core';
import { SubscribeUserService } from '../subscribe-user/subscribe-user.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerModel: any;

  footerValue: any;
  constructor(private subScribeUserService: SubscribeUserService, private sharedService: SharedService) { }

  ngOnInit() {
    this.getfooter();
  }
  getSubscrbe() {
    this.subScribeUserService.openCustomer()
      .subscribe(res => {
        if (res) {
          console.log(res);
        }
      });
  }
  getfooter() {
    this.sharedService.getFooter().subscribe(data => {
      this.footerModel = data;
     /*  console.log(data); */
    }, error => {
      console.log(error);
    });
  }

}
