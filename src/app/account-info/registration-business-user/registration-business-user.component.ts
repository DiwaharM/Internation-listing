import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { BusinessUserModel } from '../registration-business-user/business-user.model';
import { MustMatch } from './must-match.validator';
import { PasswordValidation } from './password.validator';
import { AcountService } from '../acount.service';
import { PackDetailModel } from './package-detail.model';
import {WindowRefService} from './window-ref.service';
import {PaymentDetail} from './paymentDetail.model';

@Component({
  selector: 'app-registration-business-user',
  templateUrl: './registration-business-user.component.html',
  styleUrls: ['./registration-business-user.component.css']
})
export class RegistrationBusinessUserComponent implements OnInit {
  public buttonStyle =
    {
      margin: '8px',
      width: '50%',
      border: '1px solid rgb(3, 70, 15)',
      'border-radius': '1px',
      'background-color': 'rgba(1, 85, 5, 0.349)',
      color: 'rgb(3, 70, 15)',
      'font-family': 'Expert san',
      'font-size': '20px',
      'text-transform': 'uppercase',
      'letter-spacing': '0.8px'
    };
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  message;
  action;
  SelectedValue: any;
  regModel: any;
  paymentModel: any;
  paymentDetailModel: PaymentDetail;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
              public dialog: MatDialog, private accountService: AcountService,  private winRef: WindowRefService) { }

              rzp1: any;
  ngOnInit() {
    this.createForm();
    this.getPaymentPackage();
  }
  createForm() {
    this.firstFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: [''],
      country: [''],
      emailId: [''],
      mobileNumber: [''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
        /* validator: PasswordValidation.MatchPassword */
        validator: MustMatch('password', 'confirmPassword')
      });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }
  /*   checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true }
  } */

  selectValue(e) {
    this.SelectedValue = e.value;
    console.log(this.SelectedValue);
  }
  submit() {
    this.regModel = new BusinessUserModel();
    this.regModel.firstName = this.firstFormGroup.controls.firstName.value;
    this.regModel.lastName = this.firstFormGroup.controls.lastName.value;
    this.regModel.companyName = this.firstFormGroup.controls.companyName.value;
    this.regModel.country = this.firstFormGroup.controls.country.value;
    this.regModel.emailId = this.firstFormGroup.controls.emailId.value;
    this.regModel.mobileNumber = this.firstFormGroup.controls.mobileNumber.value;
    this.regModel.password = this.firstFormGroup.controls.password.value;
    this.regModel.checkID = this.SelectedValue._id;
    this.accountService.createBussUser(this.regModel).subscribe(data => {
      this.regModel = data;
      console.log(data, 'data');
  /*     this.initPay(data.razorpayOrderId); */
  this.router.navigate(['add-listing/addcompanydetail']);
      sessionStorage.setItem('usingID', data._id);
    }, error => {
      console.log(error);
    });

  }
  initPay(orderId) {
    const options = {
       key: 'rzp_live_8qoHdemEkXVG4k',
       amount: '100',
       order_id: orderId,
       name: 'International Standard Listing',
         handler: this.paymentResponseHander.bind(this)
      };
    this.rzp1 = new this.winRef.nativeWindow.Razorpay(options);
    this.rzp1.open();
    }
    paymentResponseHander(response) {
      console.log(response);
     this.razorPayDetails(response);
     /* this.router.navigate(['add-listing/addcompanydetail']); */
    }
    razorPayDetails(response) {
      const USERID = sessionStorage.getItem('usingID');
      this.paymentDetailModel = new PaymentDetail();
      this.paymentDetailModel.paymentId = response.razorpay_payment_id;
      this.paymentDetailModel.razorpayOrderId = response.razorpay_order_id;
      this.paymentDetailModel.razorpaySignature = response.razorpay_signature;
      this.accountService.addRazorpayResponse(this.paymentDetailModel, USERID).subscribe(data => {
       console.log(data);
     }, err => {
       console.log(err);
     });
    }
  getPaymentPackage() {
    this.accountService.getAllPaymentPackage().subscribe(data => {
      this.paymentModel = data;
      /* console.log(data); */
    }, error => {
      console.log(error);
    });
  }
}


