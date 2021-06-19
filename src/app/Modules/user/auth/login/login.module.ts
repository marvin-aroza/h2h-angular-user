import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Required Modules
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
