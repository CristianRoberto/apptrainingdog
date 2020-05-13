import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmincliPage } from './admincli.page';

const routes: Routes = [
  {
    path: '',
    component: AdmincliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmincliPageRoutingModule {}
