import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalProductPage } from '../modal/modal-product/modal-product.page';

@Component({
  selector: 'app-tabs4',
  templateUrl: './tabs4.page.html',
  styleUrls: ['./tabs4.page.scss'],
})
export class Tabs4Page implements OnInit {

  constructor(private ProductoService:ProductoService, private router:Router, private modalctr:ModalController ) {

  }

  products=[]

  ngOnInit(){
    //obtiene los productos del servicio ProductoService  y los guarda en un arreglo
 this.products= this.ProductoService.getProduct(); 

  }

  /// envento modal 

  async presentModal() {
  const modal = await this.modalctr.create({
  
    component: ModalProductPage,
    
    // aqui componentes que se pueden enviar al modal 
    componentProps: {
      'firstName': 'Douglas',
      'lastName': 'Adams',
      'middleInitial': 'N'
      

 
    },
  }
  
  );
 
  return await modal.present();
  }

//evento de refresco de pantalla se le puede pasar un arreglo y un limite de carga de archivos 

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }



}
