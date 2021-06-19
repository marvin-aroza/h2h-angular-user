import { EditPostComponent } from './edit-post/edit-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { CommentsComponent } from './comments/comments.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'view/:id',
    component: CommentsComponent
  },
  {
    path: 'add',
    component: AddPostComponent
  },
  {
    path: 'edit/:id',
    component: EditPostComponent
  },
  {
    path: ':id',
    component: BlogsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
