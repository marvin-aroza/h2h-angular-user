import { Component, OnInit, Optional,Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog'

//service
import { ContactService } from 'src/app/shared/Services/contact.service'

@Component({
  selector: 'app-view-response',
  templateUrl: './view-response.component.html',
  styleUrls: ['./view-response.component.css']
})
export class ViewResponseComponent implements OnInit {

  contactId:any
  contactDetails:any
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data:any,
    private contactService:ContactService
  ) { }

  ngOnInit(): void {
    this.contactId = this.data._id
    console.log(this.data);
    this.getContactDetails();
  }

  getContactDetails() {
    this.contactService.getContactDetail(this.contactId).subscribe(res => {
      console.log(res);
      this.contactDetails = res.data
    });
  }

}
