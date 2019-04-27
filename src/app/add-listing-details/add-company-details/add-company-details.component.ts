import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-company-details',
  templateUrl: './add-company-details.component.html',
  styleUrls: ['./add-company-details.component.css']
})
export class AddCompanyDetailsComponent implements OnInit {
  categories = ['textile', 'car', 'software'];
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private snackBar: MatSnackBar) { }
  other: boolean = false;
  firstFormGroup: FormGroup;
  Category = ['Hotels', 'School', 'Residence', 'Hospital', 'Clothing Store', 'Consulting'];

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
  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      companyName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: [''],
      emailId: [''],
      mobileNumber: [''],
      websitelink: [''],
      category: [''],
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
    this.message = 'Company Details Added Successfully';
    this.snackBar.open(this.message, this.action, {
      duration: 3000,
    });
    this.router.navigate(['/listing/viewlistingdetail']);
  }
}
