import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducttPage } from './productt.page';

const routes: Routes = [
  {
    path: '',
    component: ProducttPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProducttPageRoutingModule {}
