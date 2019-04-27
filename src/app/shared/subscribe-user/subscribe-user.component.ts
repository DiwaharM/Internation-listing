import { Component, OnInit, Inject, Optional, Input } from '@angular/core';


import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscribe-user',
  templateUrl: './subscribe-user.component.html',
  styleUrls: ['./subscribe-user.component.css']
})
export class SubscribeUserComponent implements OnInit {
  customerDetailsForm: FormGroup;
  constructor(private fb: FormBuilder,
              @Optional() public dialogRef: MatDialogRef<SubscribeUserComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.customerDetailsForm = this.fb.group({
      mobileNumber: [''],
      emailId: [''],
      customerName: ['']
    });
  }
  cancel() {
    this.dialogRef.close();
  }
}
