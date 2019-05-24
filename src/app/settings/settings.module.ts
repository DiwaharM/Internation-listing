import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { TermsAndUseComponent } from './terms-and-use/terms-and-use.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatRippleModule,
  MatDialogModule,
  MatChipsModule,
  MatInputModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SupportComponent } from './support/support.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [TermsAndUseComponent, PrivacyPolicyComponent, SupportComponent, ContactUsComponent, FaqComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatRippleModule,
  MatDialogModule,
  MatChipsModule,
  MatInputModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  FormsModule,
  ReactiveFormsModule
  ]
})
export class SettingsModule { }
