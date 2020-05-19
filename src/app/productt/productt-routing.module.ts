import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducttPage } from './productt.page';
import { ModalProductPage } from '../modal/modal-product/modal-product.page';
import { ModalProductPageModule } from '../modal/modal-product/modal-product.module';

const routes: Routes = [
  {
    path: '',
    component: ProducttPage
  }
];

@NgModule({
entryComponents:[
ModalProductPage
],

  imports: [RouterModule.forChild(routes),
  ModalProductPageModule
  ],
  exports: [RouterModule],
})
export class ProducttPageRoutingModule {}
