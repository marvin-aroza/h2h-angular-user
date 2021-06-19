import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Required Modules
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
