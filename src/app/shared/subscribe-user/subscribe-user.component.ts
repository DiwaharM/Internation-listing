import { Component, OnInit, Inject, Optional, Input } from '@angular/core';

import { RegistrationUser } from '../reg-user.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscribe-user',
  templateUrl: './subscribe-user.component.html',
  styleUrls: ['./subscribe-user.component.css']
})
export class SubscribeUserComponent implements OnInit {
  customerDetailsForm: FormGroup;
  subValue: RegistrationUser;
  constructor(private fb: FormBuilder, private sharedService: SharedService,
              @Optional() public dialogRef: MatDialogRef<SubscribeUserComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.customerDetailsForm = this.fb.group({
      mobileNumber: [''],
      emailId: [''],
      userName: ['']
    });
  }
  cancel() {
    this.dialogRef.close();
  }
  addSingleCustomer(customerDetailsForm: FormGroup) {
    this.subValue = new RegistrationUser();
    this.subValue.userName = customerDetailsForm.controls.userName.value;
    this.subValue.mobileNumber = customerDetailsForm.controls.mobileNumber.value;
    this.subValue.emailId = customerDetailsForm.controls.emailId.value;
    this.sharedService.customerSubscribe(this.subValue).subscribe(data => {
     if (data === true) {
      this.snackBar.open('Already subscribed', 'OK', { duration: 1000, panelClass: ['blue-snackbar'] });
     } else {
      this.snackBar.open('subscribtion successfull', 'OK', { duration: 1000, panelClass: ['blue-snackbar'] });
     }
    }, error => {
      console.log(error);
    });
  }
}
