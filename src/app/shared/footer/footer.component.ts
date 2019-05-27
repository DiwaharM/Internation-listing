import { Component, OnInit } from '@angular/core';
import { SubscribeUserService } from '../subscribe-user/subscribe-user.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private subScribeUserService: SubscribeUserService) { }

  ngOnInit() {
  }
  getSubscrbe() {
    this.subScribeUserService.openCustomer()
      .subscribe(res => {
        if (res) {
        console.log(res);
        }
      });
  }

}
