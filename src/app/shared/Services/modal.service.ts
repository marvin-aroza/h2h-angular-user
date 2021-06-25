import { Injectable } from '@angular/core';

//components
import { RegisterComponent } from 'src/app/Modules/user/auth/register/register/register.component'
import { LoginComponent } from 'src/app/Modules/user/auth/login/login/login.component'
import { ViewResponseComponent } from 'src/app/Modules/user/pages/profile/view-response/view-response.component'

//Material import for modal
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    public dialog: MatDialog,
  ) { }

  //This functions open the registration model
  register(): void {
    this.dialog.closeAll(); // This line close all existing open modals
    const dialogRef = this.dialog.open(RegisterComponent, {

      backdropClass: 'backdropBackground',
      data: { name: 'google', animal: '' }
    });

    dialogRef.afterClosed().subscribe((result: { food: any; }) => {
      console.log('The dialog was closed', result);
    });
  }

  login(): void {
    this.dialog.closeAll(); // This line close all existing open modals

    const dialogRef = this.dialog.open(LoginComponent, {

      backdropClass: 'backdropBackground',
      data: { name: 'google', animal: '' }
    });

    dialogRef.afterClosed().subscribe((result: { food: any; }) => {
      console.log('The dialog was closed', result);
    });
  }

  close() {
    this.dialog.closeAll(); // This line close all existing open modals
  }

  checkLoggedInUser() {
    //Checks whether user details are present in local storage
    let userDetails = localStorage.getItem('userDetails') || '';
    if(userDetails) {
      let userDetail = JSON.parse(userDetails);
      if(userDetail.token) {
        return true;
      } else {
        return false
      }

    } else {
      return false
    }
  }

  viewReplyonContact(id:any): void {
    this.dialog.closeAll(); // This line close all existing open modals

    const dialogRef = this.dialog.open(ViewResponseComponent, {

      backdropClass: 'backdropBackground',
      data: { _id: id }
    });

    dialogRef.afterClosed().subscribe((result: { food: any; }) => {
      console.log('The dialog was closed', result);
    });
  }


}
