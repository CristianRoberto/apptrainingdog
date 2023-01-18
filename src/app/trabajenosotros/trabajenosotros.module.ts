import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrabajenosotrosPageRoutingModule } from './trabajenosotros-routing.module';

import { TrabajenosotrosPage } from './trabajenosotros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrabajenosotrosPageRoutingModule
  ],
  declarations: [TrabajenosotrosPage]
})
export class TrabajenosotrosPageModule {}
