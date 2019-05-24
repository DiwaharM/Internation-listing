import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { BusinessUserModel } from '../registration-business-user/business-user.model';
import { MustMatch } from './must-match.validator';
import { PasswordValidation } from './password.validator';
import { AcountService } from '../acount.service';
@Component({
  selector: 'app-registration-business-user',
  templateUrl: './registration-business-user.component.html',
  styleUrls: ['./registration-business-user.component.css']
})
export class RegistrationBusinessUserComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  message;
  action;
  SelectedValue: any;
  regModel: any;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
              public dialog: MatDialog, private accountService: AcountService) { }


  ngOnInit() {
   this.createForm();
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
    this.regModel.packageDetails = this.SelectedValue;
    this.accountService.createBussUser(this.regModel).subscribe(data => {
      this.regModel = data;
      sessionStorage.setItem('mobileNumber', this.firstFormGroup.controls.mobileNumber.value);
      this.router.navigate(['add-listing/addcompanydetail']);
    }, error => {
      console.log(error);
    });
  }
}


