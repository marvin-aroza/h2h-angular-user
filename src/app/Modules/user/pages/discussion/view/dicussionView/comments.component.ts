import { Component, OnInit, Input  } from '@angular/core';

//service
import { ForumService } from 'src/app/shared/Services/forum.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  //variable
  @Input() forumId: any;
  forumDetail:any

  constructor(
    public forumService:ForumService
  ) {
    window.scroll(0,0);
  }

  ngOnInit(): void {
    console.log(this.forumId);
    this.getForumDetails();
  }

  //get forum details
  getForumDetails() {
    this.forumService.getForumbyId(this.forumId).subscribe(res => {
      console.log(res);
      this.forumDetail = res.data[0]
    });
  }

}
