import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Material import for modal
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2'


//Required imports
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

//Required Services
import { ContactService } from 'src/app/shared/Services/contact.service'
import { ModalService } from 'src/app/shared/Services/modal.service'
import { AuthService } from 'src/app/shared/Services/auth.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //Variables
  form!: FormGroup;
  formLoaded:Boolean = false;
  isFormSubmitted:Boolean = false;
  contactBy:any = this.authService.getUserDetails()?.id;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private contactService: ContactService,
    public router: Router,
    private ModalService: ModalService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  //Create the form instance
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })
    this.formLoaded = true;
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  //This function handles the login process
  send() {
    console.log(this.form);

    this.isFormSubmitted = true;

    if (this.form.invalid) {
      return;
    } else {
      //request body for login
      let formData = {
        name:this.f.name.value,
        subject:this.f.subject.value,
        message:this.f.message.value,
        email: this.f.email.value,
        contactBy: (this.contactBy) ? this.contactBy : null
      }

      //Contact service call to send request to server
      this.contactService.addContact(formData).subscribe(res => {
        console.log(res);
        if(res.status) {
          // window.location.reload();
          Swal.fire({
              icon: 'success',
              title: res.message,
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              // this.ModalService.close();
              this.router.navigate(['/']);
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
