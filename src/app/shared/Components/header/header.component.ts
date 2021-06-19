import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

//Material import for modal
import { MatDialog } from '@angular/material/dialog';

//components
import { LoginComponent } from 'src/app/Modules/user/auth/login/login/login.component'

//services
import { AuthService } from 'src/app/shared/Services/auth.service'
import { CategoryService } from 'src/app/shared/Services/category.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Variables
  date = new Date();

  isLoggedIn = this.authService.getUserDetails();
  isLoggedStatus:boolean = false
  catList:any = []

  constructor(
    public dialog: MatDialog,
    private authService:AuthService,
    public router: Router,
    private categoryService:CategoryService
    ) {
      this.getCategroy();
    }

  ngOnInit(): void {
    this.isLoggedStatus = Object.entries(this.isLoggedIn).length !== 0
    console.log(this.isLoggedStatus);
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

  logout() {
    localStorage.clear();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });

  }

  getCategroy() {
    this.categoryService.getCategory().subscribe(res => {
      this.catList = res.data
    });
  }

}
