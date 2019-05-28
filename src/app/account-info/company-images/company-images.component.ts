import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { BusinessUserModel } from '../registration-business-user/business-user.model';
import { AcountService } from '../acount.service';
import { BusinessUserImage } from '../registration-business-user/businessDetail.model';

@Component({
  selector: 'app-company-images',
  templateUrl: './company-images.component.html',
  styleUrls: ['./company-images.component.css']
})
export class CompanyImagesComponent implements OnInit {
  fileToUpload: any;
  urls: any[];
  reader: FileReader;
  fileLength: any;
  userId: string;
  headerModel: BusinessUserImage;
/*   assetListingService: any; */

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
    public dialog: MatDialog, private accountService: AcountService) { }

  ngOnInit() {
    this.getUserId();
    this.getProjile();
  }
  handleFileInput(images: any) {
  /*   this.imageError = false; */
    this.fileToUpload = images;
    this.urls = [];
    const files = images;
    if (files) {
      for (const file of files) {
        this.reader = new FileReader();
        this.reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        };
        this.reader.readAsDataURL(file);
      }
    }
  }
  getUserId() {
    this.userId = sessionStorage.getItem('userID');
  }
  uploadImages() {
    const formData: any = new FormData();
    this.fileLength = this.fileToUpload.length;
    for (let i = 0; i <= this.fileLength; i++) {
      formData.append('uploads[]', this.fileToUpload[i]);
    }
    this.accountService.uploadCompanyImages(formData, this.userId).subscribe(data => {
    }, error => {
      console.log(error);
    });
    this.redirect();
  }
  redirect() {
    throw new Error('Method not implemented.');
  }
  getProjile() {
    this.accountService.getProfil(this.userId).subscribe(data => {
      this.headerModel = data;
      console.log( this.headerModel);
    }, error => {
      console.log(error);
    });
  }
}