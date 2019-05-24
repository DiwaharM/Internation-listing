import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../settings.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FAQ } from './faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqModel: any;
  constructor(private settingService: SettingsService) { }

  ngOnInit() {
    this.getFaq();
  }
  getFaq() {
    this.settingService.getFaq().subscribe(data => {
      this.faqModel = data;
    }, error => {
      console.log(error);
    });
  }

}
