import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

//Custom modules
import { SharedModule} from 'src/app/shared/shared.module'

//Required Modules
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
