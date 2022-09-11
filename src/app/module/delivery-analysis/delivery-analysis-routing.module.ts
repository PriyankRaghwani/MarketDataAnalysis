import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryAnalysisComponent } from './delivery-analysis.component';

const routes: Routes = [{
  path:'',
  component: DeliveryAnalysisComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryAnalysisRoutingModule { }
