import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'

//services
import { CategoryService } from 'src/app/shared/Services/category.service'
import { PostService } from 'src/app/shared/Services/post.service'

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit,OnDestroy {

  //varibales
  catId = this.route.snapshot.params.id
  categoryDetails:any
  postList:any = []
  mySubscription
  p:number = 1;

  constructor(
    private route:ActivatedRoute,
    private catService:CategoryService,
    private postService:PostService,
    private router: Router,
  ) {
    window.scroll(0,0);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
         // Trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
      }
    });
  }

  ngOnInit(): void {
    this.getCatDetails();
    this.getPostbyCatId();
  }

  getCatDetails() {
    this.catService.getCategroyById(this.catId).subscribe(res => {
      console.log(res);
      this.categoryDetails = res.data
    });
  }

  getPostbyCatId() {
    this.postService.getPostListByCatId(this.catId).subscribe(res => {
      console.log(res);
      this.postList = res.data
    });
  }

  ngOnDestroy(){
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

}
