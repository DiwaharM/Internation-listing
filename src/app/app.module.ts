import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule, MatCardModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NavheaderComponent } from './shared/navheader/navheader.component';
import { FooterComponent } from './shared/footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SubscribeUserComponent } from '../app/shared/subscribe-user/subscribe-user.component';
import { SubscribeUserService } from '../app/shared/subscribe-user/subscribe-user.service';
import {
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatRippleModule,
  MatChipsModule,
  MatFormFieldModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatTabsModule,
  MatSliderModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavheaderComponent,
    FooterComponent,
    SubscribeUserComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatRippleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatSliderModule,

    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SubscribeUserService],
  bootstrap: [AppComponent],
  entryComponents: [SubscribeUserComponent]
})
export class AppModule { }
