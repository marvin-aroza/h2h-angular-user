import { RequestmodalComponent } from './../requestmodal/requestmodal.component';
import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

//service
import { DonateService } from 'src/app/shared/Services/donate.service'

//Material import for modal
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  //variable
  donateId:any = this.router.snapshot.params.id
  forumDetail:any

  constructor(
    public donateService:DonateService,
    public router:ActivatedRoute,
    public dialog: MatDialog
  ) {
    window.scroll(0,0);
  }

  ngOnInit(): void {
    console.log(this.donateId);
    this.getForumDetails();
  }

  //get forum details
  getForumDetails() {
    this.donateService.getDonatebyId(this.donateId).subscribe(res => {
      console.log(res);
      this.forumDetail = res.data[0]
    });
  }

  request(): void {
    this.dialog.closeAll(); // This line close all existing open modals

    const dialogRef = this.dialog.open(RequestmodalComponent, {

      backdropClass: 'backdropBackground',
      data: { donateId : this.donateId }
    });

    dialogRef.afterClosed().subscribe((result: { food: any; }) => {
      console.log('The dialog was closed', result);
    });
  }

}
