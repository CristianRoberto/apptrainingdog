import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregartiendasPage } from './agregartiendas.page';

const routes: Routes = [
  {
    path: '',
    component: AgregartiendasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregartiendasPageRoutingModule {}
