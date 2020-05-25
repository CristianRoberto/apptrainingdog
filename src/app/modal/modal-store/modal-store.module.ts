import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ModalStorePage } from './modal-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule  ],
  declarations: [ModalStorePage]
})
export class ModalStorePageModule {}
