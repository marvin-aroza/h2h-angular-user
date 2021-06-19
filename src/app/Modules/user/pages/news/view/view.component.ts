import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
//service
import { NewsService } from 'src/app/shared/Services/news.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  //variable
  newsId: any = this.router.snapshot.params.id
  newsDetail:any;

  constructor(
    private newsService:NewsService,
    private router: ActivatedRoute
  ) {
    window.scroll(0,0);
  }

  ngOnInit(): void {
    this.getNewsDetail();
  }

  getNewsDetail() {
    this.newsService.getNewsById(this.newsId).subscribe(res => {
      console.log(res);
      this.newsDetail = res.data
    });
  }

}
