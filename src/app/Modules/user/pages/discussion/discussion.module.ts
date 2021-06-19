import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscussionRoutingModule } from './discussion-routing.module';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './view/dicussionView/comments.component';

//modules
import { SharedModule } from 'src/app/shared/shared.module'
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { CKEditorModule } from 'ckeditor4-angular';


@NgModule({
  declarations: [
    ListComponent,
    MainComponent,
    ViewComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DiscussionRoutingModule,
    SharedModule,
    NgxPaginationModule,
    CKEditorModule
  ]
})
export class DiscussionModule { }
