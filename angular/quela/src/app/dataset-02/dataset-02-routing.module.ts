import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardAirComponent } from './dashboard-air/dashboard-air.component';
import { DashboardWaterComponent } from './dashboard-water/dashboard-water.component';

const routes: Routes = [
  { path: '',                  component: DashboardAirComponent    },
  { path: 'dataset-02',        component: DashboardAirComponent    },
  { path: 'dataset-02-water',  component: DashboardWaterComponent  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dataset02RoutingModule { }
