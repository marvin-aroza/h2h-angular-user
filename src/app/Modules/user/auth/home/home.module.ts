import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CourselComponent } from './coursel/coursel.component';
import { NewsListSectionComponent } from './news-list-section/news-list-section.component';
import { ImpactComponent } from './impact/impact.component';
import { RecentEventsComponent } from './recent-events/recent-events.component';
import { EventsComponent } from './events/events.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { SliderComponent } from './slider/slider.component';

import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [
    HomeComponent,
    CourselComponent,
    NewsListSectionComponent,
    ImpactComponent,
    RecentEventsComponent,
    EventsComponent,
    LatestNewsComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
