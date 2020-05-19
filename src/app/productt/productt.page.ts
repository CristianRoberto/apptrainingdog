import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../servicios/producto.service';
import { ModalController } from '@ionic/angular';
import { ModalProductPage } from '../modal/modal-product/modal-product.page';
import { TproductService } from '../servicios/tproduct.service';

@Component({
  selector: 'app-productt',
  templateUrl: './productt.page.html',
  styleUrls: ['./productt.page.scss'],
})
export class ProducttPage implements OnInit {

  constructor(private tpser:TproductService ,private router:Router, private modalctr:ModalController) { }

  spanded=true;
  public cont =[];
  products=[];
  ngOnInit() {
     //obtiene los productos del servicio ProductoService  y los guarda en un arreglo
  this.products= this.tpser.getProduct(); 
  console.log(this.products)

  //for(let i=0 ; i<this.products.length;i++){
      //  this.cont.push(1)
    //}
    //console.log(this.cont)


  }



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



  sum(i){
    this.cont[i]++;
   }
  
   rest(i){
    
     if(this.cont[i]>1) this.cont[i]--;
   }  
  



}
