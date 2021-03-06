import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingRoutingModule } from './listing-routing.module';
import { ListingService } from './listing.service';
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
import { ViewListingComponent } from './view-listing/view-listing.component';
import { ViewListingDetailsComponent } from './view-listing-details/view-listing-details.component';
import { VisitorsReportComponent } from './visitors-report/visitors-report.component';
import { ViewSearchListingComponent } from './view-search-listing/view-search-listing.component';

@NgModule({
  declarations: [ViewListingComponent, ViewListingDetailsComponent, VisitorsReportComponent, ViewSearchListingComponent],
  imports: [
    CommonModule,
    ListingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
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
  ],
  providers: [ListingService]
})
export class ListingModule { }
