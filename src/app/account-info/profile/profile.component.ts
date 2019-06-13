import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { BusinessUserModel } from '../registration-business-user/business-user.model';
import { AcountService } from '../acount.service';
import { BusinessUserImage } from '../registration-business-user/businessDetail.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  userID: string;
  profileValue: any;
  profileModel: any;
  headerModel: BusinessUserImage;
  editshow = false;
  updateValue: any;
  fileToUpload: any;
  urls: any[];
  reader: FileReader;
  showImage = false;
  fileLength: any;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
    public dialog: MatDialog, private accountService: AcountService) { }

  ngOnInit() {
    this.createForm();
    this.getUserID();
    this.getProjile();
  }
  createForm() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: [''],
      country: [''],
      emailId: [''],
      mobileNumber: ['']
    });
  }
  getUserID() {
    this.userID = sessionStorage.getItem('userID');
  }
  getProjile() {
    this.accountService.getProfil(this.userID).subscribe(data => {
      this.profileModel = data;
      this.profileValue = data[0];
      this.headerModel = data;
      console.log( this.profileValue);
    }, error => {
      console.log(error);
    });
  }
  imageShow() {
    this.showImage = true;
  }
  getShowEdit() {
    this.editshow = true;
  }
  cancel() {
    this.editshow = false;
  }
  cancelImage() {
    this.showImage = false;
  }
  onSubmit(profileForm: FormGroup, data) {
    this.accountService.updateProfil(profileForm.value, data._id).subscribe(value => {
      this.getProjile();
      this.editshow = false;
    }, error => {
      console.log(error);
    });
  }
  handleFileInput1(images: any) {
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
  updateLogo(row) {
    const formData: any = new FormData();
    this.fileLength = this.fileToUpload.length;
    for (let i = 0; i <= this.fileLength; i++) {
      formData.append('uploads[]', this.fileToUpload[i]);
    }
    this.accountService.updateProfilLogo(formData, row[0]._id).subscribe(data => {
      this.getProjile();
      this.showImage = false;
    }, error => {
      console.log(error);
    });
  }
  update(data) {
    console.log(data[0]._id);
  }
}
