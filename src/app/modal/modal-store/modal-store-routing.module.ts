import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalStorePage } from './modal-store.page';

const routes: Routes = [
  {
    path: '',
    component: ModalStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalStorePageRoutingModule {}
