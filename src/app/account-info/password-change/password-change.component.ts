import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusinessUserModel } from '../registration-business-user/business-user.model';
import { AcountService } from '../acount.service';
import { fadeInContent } from '@angular/material';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
  passValue: BusinessUserModel;
  userId: string;
  oldPasswrod: any;
  enterPassword = false;
  currectPassword = false;
  oldMenu = false;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
              private acountService: AcountService) { }

  ngOnInit() {
    this.getUserId();
    this.getDetail();
  }
  submitOld(oldPass) {
    if (oldPass.length === 0) {
      this.enterPassword = true;
      this.currectPassword = false;
    } else {
      if (oldPass === this.oldPasswrod) {
        this.currectPassword = false;
        this.enterPassword = false;
        this.oldMenu = true;
      } else {
        this.currectPassword = true;
        this.enterPassword = false;
      }
    }
  }
  getDetail() {
    this.acountService.getProfil(this.userId).subscribe(data => {
      this.oldPasswrod = data[0].password;
    }, error => {
      console.log(error);
    });
  }
  getUserId() {
    this.userId = sessionStorage.getItem('userID');
  }
  cancel() {

  }
  submitNew(newPass) {
    /*   console.log(newPass); */
    this.passValue = new BusinessUserModel();
    this.passValue.password = newPass;
    this.acountService.changePassword(this.passValue, this.userId).subscribe(data => {
      /*  console.log(data); */
      sessionStorage.removeItem('userID');
      sessionStorage.removeItem('businessLogIn');
      this.router.navigate(['/account/login-business']);
    }, error => {
      console.log(error);
    });
  }
}
