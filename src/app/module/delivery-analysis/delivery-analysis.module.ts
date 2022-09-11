import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryAnalysisRoutingModule } from './delivery-analysis-routing.module';
import { DeliveryAnalysisComponent } from './delivery-analysis.component';


@NgModule({
  declarations: [DeliveryAnalysisComponent],
  imports: [
    CommonModule,
    DeliveryAnalysisRoutingModule
  ]
})
export class DeliveryAnalysisModule { }
