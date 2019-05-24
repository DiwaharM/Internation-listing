import { Component, OnInit, Inject, Optional, Input } from '@angular/core';

import { TermsModel } from './terms.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../settings.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-terms-and-use',
  templateUrl: './terms-and-use.component.html',
  styleUrls: ['./terms-and-use.component.css']
})
export class TermsAndUseComponent implements OnInit {
  termsModel: any;
  constructor(private settingService: SettingsService, private router: Router) { }

  ngOnInit() {
    this.getTermAndUse();
  }
  getTermAndUse() {
    this.settingService.getTermsAndUse().subscribe(data => {
      this.termsModel = data;
    }, error => {
      console.log(error);
    });
  }

}
