import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonateRoutingModule } from './donate-routing.module';

import { ReactiveFormsModule, FormsModule} from '@angular/forms'

//Modules
import { SharedModule } from 'src/app/shared/shared.module'
import {NgxPaginationModule} from 'ngx-pagination';

import { CommentsComponent } from './view/dicussionView/comments.component'
import { MainComponent } from './main/main.component'
import { ListComponent } from './list/list.component'

import { CKEditorModule } from 'ckeditor4-angular';
import { RequestmodalComponent } from './view/requestmodal/requestmodal.component';

@NgModule({
  declarations: [
    CommentsComponent,
    MainComponent,
    ListComponent,
    RequestmodalComponent
  ],
  imports: [
    CommonModule,
    DonateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    CKEditorModule
  ]
})
export class DonateModule { }
