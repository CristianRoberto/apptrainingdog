import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregartiendasPageRoutingModule } from './agregartiendas-routing.module';

import { AgregartiendasPage } from './agregartiendas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregartiendasPageRoutingModule
  ],
  declarations: [AgregartiendasPage]
})
export class AgregartiendasPageModule {}
