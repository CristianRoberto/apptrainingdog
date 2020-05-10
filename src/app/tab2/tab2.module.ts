import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ModalProductPage } from '../modal/modal-product/modal-product.page';
import { ModalProductPageModule } from '../modal/modal-product/modal-product.module';
import { ModalProductPageRoutingModule } from '../modal/modal-product/modal-product-routing.module';

@NgModule({
  entryComponents:[
    ModalProductPage
  ],
  
  imports: [
    
    
    IonicModule,
    CommonModule,
    FormsModule,
    ModalProductPageModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
   
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
