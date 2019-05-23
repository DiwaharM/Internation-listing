import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { SubscribeUserComponent } from './subscribe-user.component';
import { RegistrationUser } from '../reg-user.model';

@Injectable({
  providedIn: 'root'
})
export class SubscribeUserService {
  dialogRef: MatDialogRef<SubscribeUserComponent>;
  constructor(private dialog: MatDialog) { }

  openCustomer(data?: any): Observable<boolean> {
    this.dialogRef = this.dialog.open(SubscribeUserComponent,
       { disableClose: true, backdropClass: 'light-backdrop',
         data: data
    });
    return this.dialogRef.afterClosed();
  }
  closeCustomer() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
