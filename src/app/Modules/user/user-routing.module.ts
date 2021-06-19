import { HeaderComponent } from './../../shared/Components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'page',
    component: HeaderComponent,
    loadChildren: () => import(`./pages/pages.module`).then(m => m.PagesModule)
  },
  {
  path: '',
  loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
