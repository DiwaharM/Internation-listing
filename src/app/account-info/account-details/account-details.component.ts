import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor() { }
  profiledetails = [ {name: 'Profile' , link: '/account/profile'},
  {name: 'Company Images' , link: '/account/companyimage'},
  {name: 'Package Details' , link: '/account/packageDetail'}
];
  ngOnInit() {
  }

}
