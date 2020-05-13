import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtiendaPage } from './addtienda.page';

const routes: Routes = [
  {
    path: '',
    component: AddtiendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtiendaPageRoutingModule {}
