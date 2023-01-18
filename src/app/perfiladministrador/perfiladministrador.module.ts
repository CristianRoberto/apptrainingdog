import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfiladministradorPageRoutingModule } from './perfiladministrador-routing.module';

import { PerfiladministradorPage } from './perfiladministrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfiladministradorPageRoutingModule
  ],
  declarations: [PerfiladministradorPage]
})
export class PerfiladministradorPageModule {}
