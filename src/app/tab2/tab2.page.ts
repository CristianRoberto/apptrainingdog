import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalProductPage } from '../modal/modal-product/modal-product.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private ProductoService:ProductoService,private router:Router, private modalctr:ModalController ) {

  }

products=[]

  ngOnInit(){
 this.products= this.ProductoService.getProduct(); 
console.log(this.products);

}

async presentModal() {
  const modal = await this.modalctr.create({
    component: ModalProductPage,
    componentProps: {
      'firstName': 'Douglas',
      'lastName': 'Adams',
      'middleInitial': 'N'
    }
  });
  return await modal.present();
}
  
}
