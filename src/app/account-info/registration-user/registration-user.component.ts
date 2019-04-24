import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationUser } from '../../shared/reg-user.model';


import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.css']
})
export class RegistrationUserComponent implements OnInit {
  registrationUserForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  regValue: any;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registrationUserForm = this.fb.group({
      userName: [''],
      mobileNumber: [''],
      emailId: [''],
      dateOfBirth: ['']
    });
  }
}
