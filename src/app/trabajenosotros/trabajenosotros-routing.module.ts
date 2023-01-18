import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabajenosotrosPage } from './trabajenosotros.page';

const routes: Routes = [
  {
    path: '',
    component: TrabajenosotrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabajenosotrosPageRoutingModule {}
