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
  profileForm: FormGroup;
  editshow = false;
  showImage = false;
  profileValue: any;
  Category;
  firstValue: BusinessUserModel;
  subCategory;
  secondValue: BusinessUserModel;
  showCategory: boolean;
  /*   assetListingService: any; */

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
              public dialog: MatDialog, private accountService: AcountService) { }

  ngOnInit() {
    this.createForm();
    this.getUserId();
    this.getProjile();
    this.getAllCategory();
  }
  createForm() {
    this.profileForm = this.fb.group({
      listingCompanyName: ['', Validators.required],
      listingCountry: ['', Validators.required],
      categoryName: [''],
      subCategoryName: [''],
      weblink: [''],
      listingEmailId: [''],
      listingMobileNumber: ['']
    });
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
      this.getProjile();
    }, error => {
      console.log(error);
    });
    this.getProjile();
    this.redirect();
  }
  redirect() {
    throw new Error('Method not implemented.');
  }
  getShowEdit() {
    this.editshow = true;
  }
  cancel() {
    this.editshow = false;
  }
  getProjile() {
    this.accountService.getProfil(this.userId).subscribe(data => {
      this.headerModel = data;
      this.profileValue = data[0];
      if (this.profileValue.categoryName === undefined || this.profileValue.categoryName === null) {
        this.showCategory = true;
      } else {
        this.showCategory = false;
      }
    }, error => {
      console.log(error);
    });
  }
  getAllCategory() {
    this.accountService.getCategory().subscribe(data => {
      this.Category = data;
    }, error => {
      console.log(error);
    });
  }
  changed(e) {
    this.firstValue = new BusinessUserModel();
    this.firstValue.category = e.value;
    this.accountService.getSubCategory(this.firstValue).subscribe(data => {
      this.subCategory = data[0].mainCategory;
    }, error => {
      console.log(error);
    });
  }
  onSubmit(profileForm: FormGroup, row) {
    this.secondValue = new BusinessUserModel();
    this.secondValue.listingCompanyName = row.listingCompanyName;
    this.secondValue.listingCountry = row.listingCountry;
    this.secondValue.listingEmailId = row.listingEmailId;
    this.secondValue.listingMobileNumber = row.listingMobileNumber;
    this.secondValue.companyName = row.companyName;
    this.secondValue.subCategoryName = row.subCategoryName;
    this.secondValue.weblink = row.weblink;
    this.accountService.updateCompanyDetails(this.secondValue, row._id).subscribe(data => {
      this.secondValue = data;
      this.editshow = false;
      this.getProjile();
    }, error => {
      console.log(error);
    });
    this.redirect();

  }
  deleteCompanyImage(url, e) {
    const temp = url.split('/');
    const first = new BusinessUserModel();
    first.companyImageName = temp[7];
    this.accountService.deleteCompanyImage(first, e).subscribe(data => {
      this.getProjile();
    }, error => {
      console.log(error);
    });
  }
}
