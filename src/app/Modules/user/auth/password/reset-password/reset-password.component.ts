import { Router } from '@angular/router';
import { Component, OnInit, Optional,Inject, ViewChild, ElementRef  } from '@angular/core';

//Material import for modal
// import { MatDialog } from '@angular/material/dialog';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog'
import Swal from 'sweetalert2'


//Required imports
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

//Required Services
import { AuthService } from 'src/app/shared/Services/auth.service'
import { ModalService } from 'src/app/shared/Services/modal.service'
import { PasswordService } from 'src/app/shared/Services/password.service'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  //Variables
  form!: FormGroup;
  formLoaded:Boolean = false;
  isFormSubmitted:Boolean = false;
  token:any

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private authService: AuthService,
    public router: Router,
    private ModalService: ModalService,
    private passService: PasswordService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:any,
    ) { }

  ngOnInit(): void {
    this.token=this.data.token;
    this.createForm();
  }

  //Create the form instance
  createForm() {
    this.form = this.fb.group({
      newPassword: ['', [Validators.required]]
    })
    this.formLoaded = true;
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  //This function handles the login process
  login() {
    console.log(this.form);

    this.isFormSubmitted = true;

    if (this.form.invalid) {
      return;
    } else {
      //request body for login
      let formData = {
        newPassword: this.f.newPassword.value,
        resettoken: this.token
      }

      //Login service call to send request to server
      this.passService.resetPassword(formData).subscribe(res => {
        console.log(res);
        if(res.status) {
          // window.location.reload();
          Swal.fire({
              icon: 'success',
              title: res.message,
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this.ModalService.close();
              this.router.navigate(['']);
            });
        } else {
          Swal.fire({
            icon: 'error',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    }
  }


}
