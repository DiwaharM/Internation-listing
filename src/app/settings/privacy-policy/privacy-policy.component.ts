import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../settings.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PrivacyPolicyModel } from './privacy-policy.model';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  privayModel: any;
  constructor(private settingService: SettingsService, private router: Router) { }

  ngOnInit() {
    this.getPrivatePolicy();
  }
  getPrivatePolicy() {
    this.settingService.getPrivacyPolicy().subscribe(data => {
      this.privayModel = data;
    }, error => {
      console.log(error);
    });
  }

}
