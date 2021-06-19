import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersRoutingModule } from './others-routing.module';
import { SupportCenterComponent } from './support-center/support-center.component';
import { TermsComponent } from './terms/terms.component';


@NgModule({
  declarations: [
    SupportCenterComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    OthersRoutingModule
  ]
})
export class OthersModule { }
