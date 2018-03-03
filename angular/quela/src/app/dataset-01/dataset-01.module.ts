import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dataset01RoutingModule } from './dataset-01-routing.module';
import { DashboardAirComponent } from './dashboard-air/dashboard-air.component';
import { DashboardWaterComponent } from './dashboard-water/dashboard-water.component';

@NgModule({
  imports: [
    CommonModule,
    Dataset01RoutingModule
  ],
  declarations: [DashboardAirComponent, DashboardWaterComponent]
})
export class Dataset01Module { }
