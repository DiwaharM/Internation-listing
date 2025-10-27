import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { BusinessUserModel } from '../registration-business-user/business-user.model';
import { MustMatch } from './must-match.validator';
import { PasswordValidation } from './password.validator';
import { AccountService } from '../account.service';
import { PackDetailModel } from './package-detail.model';
import { WindowRefService } from './window-ref.service';
import { PaymentDetail } from './paymentDetail.model';
import { AppSetting } from '../../config/appSetting';

@Component({
  selector: 'app-registration-business-user',
  templateUrl: './registration-business-user.component.html',
  styleUrls: ['./registration-business-user.component.css']
})
export class RegistrationBusinessUserComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  message;
  action;
  SelectedValue: any;
  regModel: any;
  paymentModel: any;
  paymentDetailModel: PaymentDetail;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
    public dialog: MatDialog, private accountService: AccountService, private winRef: WindowRefService) { }

  rzp1: any;
  ngOnInit() {
    this.createForm();
    this.getPaymentPackage();
  }
  createForm() {
    this.firstFormGroup = this.fb.group({
      firstName: [''],
      lastName: [''],
      companyName: [''],
      country: [''],
      emailId: [''],
      mobileNumber: [''],
      password: [''],
      confirmPassword: ['']
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
    this.secondFormGroup = this.fb.group({
      addressLine1: [''],
      addressLine2: [''],
      landMark: [''],
      city: [''],
      state: [''],
      pincode: ['']
    });
    this.thirdFormGroup = this.fb.group({
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
    this.regModel.addressLine1 = this.secondFormGroup.controls.addressLine1.value;
    this.regModel.addressLine2 = this.secondFormGroup.controls.addressLine2.value;
    this.regModel.landMark = this.secondFormGroup.controls.landMark.value;
    this.regModel.city = this.secondFormGroup.controls.city.value;
    this.regModel.state = this.secondFormGroup.controls.state.value;
    this.regModel.pincode = this.secondFormGroup.controls.pincode.value;
    this.accountService.createBussUser(this.regModel).subscribe(data => {
      this.regModel = data;
      /* this.initPay(data.razorpayOrderId); */
      this.router.navigate(['add-listing/addcompanydetail']);
      sessionStorage.removeItem('subID');
      sessionStorage.removeItem('subscribe');
      sessionStorage.setItem('businessLogIn', 'true');
      sessionStorage.setItem('userID', data._id);

    }, error => {
      // Error handling - could show user notification here
    });

  }
  initPay(orderId) {
    const options = {
      key: AppSetting.razorpayKey,
      amount: '100',
      order_id: orderId,
      name: 'International Standard Listing',
      handler: this.paymentResponseHander.bind(this)
    };
    this.rzp1 = new this.winRef.nativeWindow.Razorpay(options);
    this.rzp1.open();
  }
  paymentResponseHander(response) {
    this.razorPayDetails(response);
    this.router.navigate(['add-listing/addcompanydetail']);
  }
  razorPayDetails(response) {
    const USERID = sessionStorage.getItem('usingID');
    this.paymentDetailModel = new PaymentDetail();
    this.paymentDetailModel.paymentId = response.razorpay_payment_id;
    this.paymentDetailModel.razorpayOrderId = response.razorpay_order_id;
    this.paymentDetailModel.razorpaySignature = response.razorpay_signature;
    this.accountService.addRazorpayResponse(this.paymentDetailModel, USERID).subscribe(
      data => {
        // Payment response recorded successfully
      },
      err => {
        // Error handling for payment response
      }
    );
  }
  getPaymentPackage() {
    this.accountService.getAllPaymentPackage().subscribe(
      data => {
        this.paymentModel = data;
      },
      error => {
        // Error handling for payment packages
      }
    );
  }
}


