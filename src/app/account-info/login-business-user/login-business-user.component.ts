import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-business-user',
  templateUrl: './login-business-user.component.html',
  styleUrls: ['./login-business-user.component.css']
})
export class LoginBusinessUserComponent implements OnInit {
  LogInForm: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.LogInForm = this.fb.group({
      emailId: [''],
      password: ['']
    });
  }
  goToCompanyDetails() {
    this.router.navigate(['add-listing/addcompanydetail']);
  }

}
