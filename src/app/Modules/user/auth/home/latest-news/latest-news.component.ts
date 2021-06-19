import { Component, OnInit } from '@angular/core';

//Service
import { NewsService } from 'src/app/shared/Services/news.service'

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  //variables
  newsList:any = []

  constructor(
    private newsService: NewsService
  ) {
    this.getNewsList();
  }

  ngOnInit(): void {
  }

  getNewsList() {
    this.newsService.getNewsList().subscribe(res => {
      console.log(res);
      this.newsList = res.data
    });
  }

}
