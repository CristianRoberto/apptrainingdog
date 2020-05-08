import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPPage } from './cart-p.page';

const routes: Routes = [
  {
    path: '',
    component: CartPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartPPageRoutingModule {}
