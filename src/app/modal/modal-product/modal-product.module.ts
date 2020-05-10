import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { ModalProductPage } from './modal-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
   
  ],
  declarations: [ModalProductPage]
})
export class ModalProductPageModule {}
