import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { BusinessUserModel } from '../registration-business-user/business-user.model';
import { AcountService } from '../acount.service';
import { BusinessUserImage } from '../registration-business-user/businessDetail.model';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent implements OnInit {
  userID: string;
  packageModel: string;
  showPackage: boolean;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
    public dialog: MatDialog, private accountService: AcountService) { }

  ngOnInit() {
    this.getUserID();
    this.getPackage();
  }
  getPackage() {
    this.accountService.getPackage(this.userID).subscribe(data => {
      if (data.length === 0) {
        this.showPackage = false;
      } else {
        this.packageModel = data;
        this.showPackage = true;
      }
    }, error => {
      console.log(error);
    });
  }
  getUserID() {
    this.userID = sessionStorage.getItem('userID');
  }
}
