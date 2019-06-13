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
  message: string;
  action: string;
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
      firstName: ['']
    });
  }
  cancel() {
    this.dialogRef.close();
  }
  addSingleCustomer(customerDetailsForm: FormGroup) {
    this.message = 'Subscribed Successfully';
    this.subValue = new RegistrationUser();
    this.subValue.firstName = customerDetailsForm.controls.firstName.value;
    this.subValue.mobileNumber = customerDetailsForm.controls.mobileNumber.value;
    this.subValue.emailId = customerDetailsForm.controls.emailId.value;
    this.sharedService.customerSubscribe(this.subValue).subscribe(data => {
      this.snackBar.open(this.message, this.action, {
        duration: 3000,
      });

      sessionStorage.removeItem('userID');
      sessionStorage.removeItem('businessLogIn');
      sessionStorage.setItem('subID', data[0]._id);
      sessionStorage.setItem('subscribe', 'true');
      this.dialogRef.close();
    }, error => {
      console.log(error);
    });
  }
}
