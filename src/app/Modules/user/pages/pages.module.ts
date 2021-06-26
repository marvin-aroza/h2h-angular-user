import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }
