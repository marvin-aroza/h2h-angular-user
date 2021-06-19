import { Component, OnInit, OnDestroy } from '@angular/core';

//services
import { ModalService } from 'src/app/shared/Services/modal.service'
import { PostService } from 'src/app/shared/Services/post.service'
import { CategoryService } from 'src/app/shared/Services/category.service'

@Component({
  selector: 'app-news-list-section',
  templateUrl: './news-list-section.component.html',
  styleUrls: ['./news-list-section.component.css']
})
export class NewsListSectionComponent implements OnInit, OnDestroy {

  //variables
  categories:any
  postList:any

  constructor(
    public modalService: ModalService,
    private postService: PostService,
    private catService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getPost();
    this.getCategories();
  }

  checkUserLoggedIn() {
    let check = this.modalService.checkLoggedInUser();
    if(check) {
      //if user logged in then navigate to the particular post
    } else {
      //else open login modal
      this.modalService.login();
    }
  }

  //get news
  getPost() {
    this.postService.getPostList(5).subscribe((res:any) => {
      console.log(res);
      this.postList = res.data
    })
  }

  //get categories
  getCategories() {
    this.catService.getCategory().subscribe(res => {
      console.log(res);
      this.categories = res.data
    });
  }

  ngOnDestroy() {}

}

