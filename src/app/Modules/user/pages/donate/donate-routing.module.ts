
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './view/dicussionView/comments.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: ':id',
    component: CommentsComponent
  },
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonateRoutingModule { }
