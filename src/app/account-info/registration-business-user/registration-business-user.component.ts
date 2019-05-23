import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { MatSnackBar } from '@angular/material';
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
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
              public dialog: MatDialog) { }


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
      password: [''],
      confirmPassword: ['']
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }
}


