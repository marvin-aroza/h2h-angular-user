import { Component, OnInit } from '@angular/core';

//modules
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

//services
import { ContactService } from 'src/app/shared/Services/contact.service'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //variables
  form!: FormGroup
  formLoaded:Boolean = false
  isSubmitted=false;
  isLoaded=false;
  imgFile:any = '';

  constructor(
    private contactService: ContactService,
    public fb: FormBuilder
  ) {
    window.scroll(0,0);
  }

  ngOnInit(): void {
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
      subject: ['', Validators.required]
    });
    this.formLoaded = true;
  }

  get fvalues(){
    return this.form.controls;
  }

  //submit discussion
  submit() {
    console.log(this.form);
    this.isSubmitted=true;
    if(this.form.invalid){
      return
    } else {
      const formData = {
        name: this.fvalues.name.value,
        email: this.fvalues.email.value,
        message: this.fvalues.message.value,
        subject: this.fvalues.subject.value
      }
      this.contactService.addContact(formData).subscribe(result=>{
        if(result.status){
          Swal.fire({
            icon: 'success',
            title: result.message,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {

          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            showConfirmButton: false,
            timer: 3000
          });
        }
      })

    }
  }

}
