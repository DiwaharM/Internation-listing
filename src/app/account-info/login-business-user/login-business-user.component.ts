import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login-business-user',
  templateUrl: './login-business-user.component.html',
  styleUrls: ['./login-business-user.component.css']
})
export class LoginBusinessUserComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  goToCompanyDetails() {
    this.router.navigate(['add-listing/addcompanydetail']);
  }

}
