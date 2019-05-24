import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AddListingService } from '../add-listing.service';
import { BusinessUserModel } from '../../account-info/registration-business-user/business-user.model';
@Component({
  selector: 'app-add-company-details',
  templateUrl: './add-company-details.component.html',
  styleUrls: ['./add-company-details.component.css']
})
export class AddCompanyDetailsComponent implements OnInit {
  categories = ['textile', 'car', 'software'];
  companyDetail: BusinessUserModel;
  firstValue: any;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
              private snackBar: MatSnackBar, private addListService: AddListingService) { }
  other: boolean = false;
  firstFormGroup: FormGroup;
  Category;

  // image view
  fileLength;
  selectRegion: number;
  fileToUpload;
  urls = new Array<string>();
  localArray: any = [];
  selected: string;
  reader: FileReader = new FileReader();
  message;
  action;
  subCategory;
  ngOnInit() {
    this.createForm();
    this.getAllCategory();
}

createForm() {
  this.firstFormGroup = this.fb.group({
    companyName: ['', Validators.required],
    lastName: ['', Validators.required],
    country: [''],
    emailId: [''],
    mobileNumber: [''],
    websitelink: [''],
    category: [''],
    subCategory: [''],
    agree: ['']
  });
}
  getChecked() {
    this.other = ! this.other;
  }
  handleFileInput(images: any) {
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
  onSubmit() {
 /*    this.message = 'Company Details Added Successfully';
    this.snackBar.open(this.message, this.action, {
      duration: 3000,
    });
    this.router.navigate(['/listing/viewlistingdetail']); */
    this.companyDetail = new BusinessUserModel();
    this.companyDetail.listingCompanyName = this.firstFormGroup.controls.companyName.value;
    this.companyDetail.listingCountry = this.firstFormGroup.controls.country.value;
    this.companyDetail.listingEmailId = this.firstFormGroup.controls.emailId.value;
    this.companyDetail.listingMobileNumber = this.firstFormGroup.controls.mobileNumber.value;
    this.companyDetail.weblink = this.firstFormGroup.controls.websitelink.value;
    this.companyDetail.category = this.firstFormGroup.controls.category.value;
    this.companyDetail.subCategory = this.firstFormGroup.controls.subCategory.value;

  }
  getAllCategory() {
    this.addListService.getCategory().subscribe(data => {
      this.Category = data;
     /*  console.log(data); */
    }, error => {
      console.log(error);
    });
  }
  changed(e) {
    this.firstValue = new BusinessUserModel();
    this.firstValue.category = e.value;
    this.addListService.getSubCategory(this.firstValue).subscribe(data => {
      /* console.log(data); */
      this.subCategory = data;
    }, error => {
      console.log(error);
    });
  }
}
