import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRoutingModule } from './password-routing.module';
import { ResetLinkComponent } from './reset-link/reset-link.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

//Required Modules
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TriggerPassComponent } from './trigger-pass/trigger-pass.component'

@NgModule({
  declarations: [
    ResetLinkComponent,
    ResetPasswordComponent,
    TriggerPassComponent
  ],
  imports: [
    CommonModule,
    PasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PasswordModule { }
