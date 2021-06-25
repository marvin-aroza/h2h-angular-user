import { UesrAuthGuard } from 'src/app/shared/Auth/uesr-auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blog',
    canActivate: [UesrAuthGuard],
    loadChildren: () => import(`./blog/blog.module`).then(m => m.BlogModule)
  },
  {
    path: 'contact',
    loadChildren: () => import(`./contact/contact.module`).then(m => m.ContactModule)
  },
  {
    path: 'discussion',
    canActivate: [UesrAuthGuard],
    loadChildren: () => import(`./discussion/discussion.module`).then(m => m.DiscussionModule)
  },
  {
    path: 'other',
    loadChildren: () => import(`./others/others.module`).then(m => m.OthersModule)
  },
  {
    path: 'my-post',
    canActivate: [UesrAuthGuard],
    loadChildren: () => import(`./my-posts/my-posts.module`).then(m => m.MyPostsModule)
  },
  {
    path: 'my-profile',
    canActivate: [UesrAuthGuard],
    loadChildren: () => import(`./profile/profile.module`).then(m => m.ProfileModule)
  },
  {
    path: 'about',
    loadChildren: () => import(`./about/about.module`).then(m => m.AboutModule)
  },
  {
    path: 'donate',
    canActivate: [UesrAuthGuard],
    loadChildren: () => import(`./donate/donate.module`).then(m => m.DonateModule)
  },
  {
    path: 'news',
    canActivate: [UesrAuthGuard],
    loadChildren: () => import(`./news/news.module`).then(m => m.NewsModule)
  },
  {
    path: 'event',
    canActivate: [UesrAuthGuard],
    loadChildren: () => import(`./events/events.module`).then(m => m.EventsModule)
  },
  {
    path: 'covid',
    canActivate: [UesrAuthGuard],
    loadChildren: () => import(`./covid/covid.module`).then(m => m.CovidModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
