import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducttPage } from './productt.page';
import { ModalProductPage } from '../modal/modal-product/modal-product.page';
import { ModalProductPageModule } from '../modal/modal-product/modal-product.module';
import { ModalStorePage } from '../modal/modal-store/modal-store.page';
import { ModalStorePageModule } from '../modal/modal-store/modal-store.module';

const routes: Routes = [
  {
    path: '',
    component: ProducttPage
  }
];

@NgModule({
entryComponents:[
ModalProductPage,
ModalStorePage

],

  imports: [RouterModule.forChild(routes),
  ModalProductPageModule, 
  ModalStorePageModule

],
  exports: [RouterModule],
})
export class ProducttPageRoutingModule {}
