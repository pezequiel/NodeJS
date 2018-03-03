import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dataset02RoutingModule } from './dataset-02-routing.module';
import { DashboardAirComponent } from './dashboard-air/dashboard-air.component';
import { DashboardWaterComponent } from './dashboard-water/dashboard-water.component';

@NgModule({
  imports: [
    CommonModule,
    Dataset02RoutingModule
  ],
  declarations: [DashboardAirComponent, DashboardWaterComponent]
})
export class Dataset02Module { }
