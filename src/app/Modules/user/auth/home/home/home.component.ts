import { Component, OnInit } from '@angular/core';

//service
import { DonateService } from 'src/app/shared/Services/donate.service'
import { ForumService } from 'src/app/shared/Services/forum.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //variables
  donationList:any = []
  forumList:any = []

  constructor(
    private donateService:DonateService,
    private forumService:ForumService
  ) {
    this.getDonations();
    this.getDiscussion();
  }

  ngOnInit(): void {
  }

  getDonations() {
    this.donateService.getDonateList('').subscribe(res => {
      console.log(res);
      this.donationList = res.data
    });
  }

  getDiscussion() {
    this.forumService.getForumList('').subscribe(res => {
      console.log(res);
      this.forumList = res.data
    });
  }

}
