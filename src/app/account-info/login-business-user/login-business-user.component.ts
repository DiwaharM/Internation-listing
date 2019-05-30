import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusinessUserModel } from '../registration-business-user/business-user.model';
import { AcountService } from '../acount.service';
@Component({
  selector: 'app-login-business-user',
  templateUrl: './login-business-user.component.html',
  styleUrls: ['./login-business-user.component.css']
})
export class LoginBusinessUserComponent implements OnInit {
  LogInForm: FormGroup;
  loginValue: BusinessUserModel;
  loginFailed = false;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
              private acountService: AcountService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.LogInForm = this.fb.group({
      emailId: [''],
      password: ['']
    });
  }
  onSubmit(LogInForm: FormGroup) {
    this.loginValue = new BusinessUserModel();
    this.loginValue.emailId = LogInForm.controls.emailId.value;
    this.loginValue.password = LogInForm.controls.password.value;
    this.acountService.businessLogin(this.loginValue).subscribe(data => {
      if (data.length === 0) {
        this.loginFailed = true;
      } else {
        sessionStorage.removeItem('subID');
        sessionStorage.removeItem('subscribe');
        sessionStorage.setItem('businessLogIn', 'true');
        sessionStorage.setItem('userID', data[0]._id);
        this.router.navigate(['/home/home-page']);
      }
    }, error => {
      console.log(error);
    });
  }

}
