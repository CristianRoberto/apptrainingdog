import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfiladministradorPage } from './perfiladministrador.page';

const routes: Routes = [
  {
    path: '',
    component: PerfiladministradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfiladministradorPageRoutingModule {}
