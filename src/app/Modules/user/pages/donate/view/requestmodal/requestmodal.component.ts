import { Component, OnInit, Optional, Inject } from '@angular/core';

//modules
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

//services
import { DonateService } from 'src/app/shared/Services/donate.service'
import { ModalService } from 'src/app/shared/Services/modal.service'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-requestmodal',
  templateUrl: './requestmodal.component.html',
  styleUrls: ['./requestmodal.component.css']
})
export class RequestmodalComponent implements OnInit {

  //variables
  form!: FormGroup
  formLoaded:Boolean = false
  isSubmitted=false;
  isLoaded=false;
  donateId:any

  constructor(
    private donateService:DonateService,
    public fb: FormBuilder,
    private modalService:ModalService,
    // public dialogRef: MatDialogRef<MyDialogModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    window.scroll(0,0);
    this.donateId = data.donateId
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      body: ['', Validators.required]
    });
    this.formLoaded = true;
  }

  get fvalues(){
    return this.form.controls;
  }

  //submit discussion
  submitDiscussion() {
    console.log(this.form);
    this.isSubmitted=true;
    if(this.form.invalid){
      return
    } else {
      let formData = {
        body: this.fvalues.body.value,
        donateId: this.donateId
      }
      this.donateService.addDonateRequest(formData).subscribe(result=>{
        if(result.status){
          Swal.fire({
            icon: 'success',
            title: result.message,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.modalService.close();
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

  close() {
    this.modalService.close();
  }

}
