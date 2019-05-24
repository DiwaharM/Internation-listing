import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../settings.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Support } from './support.model';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  supportModel: any;
  constructor(private settingService: SettingsService) { }

  ngOnInit() {
    this.getSupport();
  }
  getSupport() {
    this.settingService.getSupport().subscribe(data => {
      this.supportModel = data;
    }, error => {
      console.log(error);
    });
  }
}
