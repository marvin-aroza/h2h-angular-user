import { TriggerPassComponent } from './trigger-pass/trigger-pass.component';
import { ResetLinkComponent } from './reset-link/reset-link.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reset-password/:token',
    component: TriggerPassComponent
  },
  {
    path: '',
    component: ResetLinkComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRoutingModule { }
