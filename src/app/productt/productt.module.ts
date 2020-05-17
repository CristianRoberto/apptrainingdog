import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducttPageRoutingModule } from './productt-routing.module';

import { ProducttPage } from './productt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProducttPageRoutingModule
  ],
  declarations: [ProducttPage]
})
export class ProducttPageModule {}
