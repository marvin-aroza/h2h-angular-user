import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

//Material import for modal
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2'


//Required imports
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

//Required Services
import { AuthService } from 'src/app/shared/Services/auth.service'
import { ModalService } from 'src/app/shared/Services/modal.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Variables
  form!: FormGroup;
  formLoaded:Boolean = false;
  isFormSubmitted:Boolean = false;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private authService: AuthService,
    public router: Router,
    private ModalService: ModalService
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  //This functions open the registration model
  register(): void {
    this.ModalService.register();
  }

  //Create the form instance
  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
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
        email: this.f.email.value,
        password: this.f.password.value
      }

      //Login service call to send request to server
      this.authService.login(formData).subscribe(res => {
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
              window.location.reload()
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
