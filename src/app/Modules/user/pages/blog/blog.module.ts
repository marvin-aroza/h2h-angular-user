import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CommentsComponent } from './comments/comments.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { AddPostComponent } from './add-post/add-post.component'

import { CKEditorModule } from 'ckeditor4-angular';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { EditPostComponent } from './edit-post/edit-post.component'
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailsComponent,
    CommentsComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class BlogModule { }
