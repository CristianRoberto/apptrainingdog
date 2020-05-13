import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmincliPageRoutingModule } from './admincli-routing.module';

import { AdmincliPage } from './admincli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmincliPageRoutingModule
  ],
  declarations: [AdmincliPage]
})
export class AdmincliPageModule {}
