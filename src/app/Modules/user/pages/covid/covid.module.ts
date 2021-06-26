import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidRoutingModule } from './covid-routing.module';
import { ViewComponent } from './view/view.component';
import { NewsComponent } from './news/news.component';
import { SharedModule } from 'src/app/shared/shared.module'


@NgModule({
  declarations: [
    ViewComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    CovidRoutingModule,
    SharedModule
  ]
})
export class CovidModule { }
