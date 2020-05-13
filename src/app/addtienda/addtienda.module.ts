import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtiendaPageRoutingModule } from './addtienda-routing.module';

import { AddtiendaPage } from './addtienda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtiendaPageRoutingModule
  ],
  declarations: [AddtiendaPage]
})
export class AddtiendaPageModule {}
