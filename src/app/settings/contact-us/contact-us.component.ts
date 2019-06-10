import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../settings.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactUs } from './contact-us.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public buttonStyle = {
    border: 'rgb(143, 143, 143) 1px solid',
    'border-radius': '0px',
    width: '50%',
    height: 'auto',
    color: 'white',
    'box-shadow': ' 0 1px 28px 0 #00000063, 0 1px 2px 0 rgba(0, 0, 0, .19)',
   'background-color': '#018DFF'

  };

  contactUsModel: any;
  constructor(private settingService: SettingsService) { }

  ngOnInit() {
    this.getContactUs();
  }
  getContactUs() {
    this.settingService.getContact().subscribe(data => {
      this.contactUsModel = data;
    }, error => {
      console.log(error);
    });
  }
}
