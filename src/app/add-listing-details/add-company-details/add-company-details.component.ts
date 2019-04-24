import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-company-details',
  templateUrl: './add-company-details.component.html',
  styleUrls: ['./add-company-details.component.css']
})
export class AddCompanyDetailsComponent implements OnInit {
  categories = ['textile', 'car', 'software'];
  constructor() { }
  other: boolean = false;
  ngOnInit() {
  }
  getChecked() {
    this.other = ! this.other;
  }
}
