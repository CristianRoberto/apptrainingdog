import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPPageRoutingModule } from './cart-p-routing.module';

import { CartPPage } from './cart-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPPageRoutingModule
  ],
  declarations: [CartPPage]
})
export class CartPPageModule {}
