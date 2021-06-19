import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ViewComponent } from './view/view.component';

//modules
import { SharedModule } from 'src/app/shared/shared.module'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
