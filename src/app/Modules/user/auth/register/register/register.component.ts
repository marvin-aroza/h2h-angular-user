import { Component, OnInit } from '@angular/core';

//Material import for modal
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2'

//Enums
import { Gender } from 'src/app/shared/Constants/gender'

//services
import { ModalService } from 'src/app/shared/Services/modal.service'
import { AuthService } from 'src/app/shared/Services/auth.service'

//Required imports
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

//Validators
import { MustMatch } from 'src/app/shared/Validators/password_match'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //Variables
  gender = Gender
  form!: FormGroup;
  formLoaded = false;
  isFormSubmitted = false;

  constructor(
    public dialog: MatDialog,
    private modalService: ModalService,
    private fb: FormBuilder,
    private authService: AuthService
    ) {
      this.createForm();
     }

  ngOnInit(): void {
    console.log(this.gender);
  }

  login(): void {
    this.modalService.login();
  }

  //Create the form instance
  createForm() {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    },{
      validator: MustMatch('password', 'confirm_password')
    })
    this.formLoaded = true;
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  register() {
    console.log(this.form);

    this.isFormSubmitted = true;

    if (this.form.invalid) {
      return;
    } else {
      //request body for Registration
      let formData = {
        firstname: this.f.first_name.value,
        lastname: this.f.last_name.value,
        username: this.f.username.value,
        email: this.f.email.value,
        password: this.f.password.value,
        phone: this.f.phone.value,
        gender: this.f.gender.value
      }

      //Registration service call to send request to server
      this.authService.registration(formData).subscribe(res => {
        console.log(res);
        if(res.status) {
          // window.location.reload();
          Swal.fire({
              icon: 'success',
              title: res.message,
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this.modalService.login();
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
