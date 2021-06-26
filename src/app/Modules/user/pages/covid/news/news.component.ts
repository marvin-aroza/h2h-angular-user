import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  categories = [
    'pharma',
    'hospitals',
    'medical-devices',
    'diagnostics',
    'policy',
    'industry',
    'people-movement',
    'financial-results',
    'videos',
    'health-it',
    'ge-bulletin',
    'mergers-and-aquisitions',
    'insurance',
    'education',
    'finance'
  ]
  filter:any = 'pharma'
  url:any = 'https://health.economictimes.indiatimes.com/widget/pharma'
  constructor(protected _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  changeFilter(event:any) {
    this.filter = event.value
    let url = 'https://health.economictimes.indiatimes.com/widget/'+this.filter
    this.url = url;
  }

  getSanitizedURL(url:any) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }

}
