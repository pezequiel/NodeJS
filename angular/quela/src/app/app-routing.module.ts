import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'dataset-01',  loadChildren: 'app/dataset-01/dataset-01.module#Dataset01Module'   },
  { path: 'dataset-02',  loadChildren: 'app/dataset-02/dataset-02.module#Dataset02Module'   },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
