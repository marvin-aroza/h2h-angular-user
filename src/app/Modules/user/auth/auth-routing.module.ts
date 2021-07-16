import { HeaderComponent } from './../../../shared/Components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import(`./register/register.module`).then(m => m.RegisterModule)
  },
  {
    path: 'contact',
    component: HeaderComponent,
    loadChildren: () => import(`./contact/contact.module`).then(m => m.ContactModule)
  },
  {
    path: 'password',
    loadChildren: () => import(`./password/password.module`).then(m => m.PasswordModule)
  },
  {
  path: '',
  component: HeaderComponent,
  loadChildren: () => import(`./home/home.module`).then(m=>m.HomeModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
