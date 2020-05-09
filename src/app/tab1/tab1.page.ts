import { Component, OnInit } from '@angular/core';
import {CartPService} from '../servicios/cart-p.service' 
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})




export class Tab1Page implements OnInit{

  
sliderConfig={

  spaceBetween:2,
  centeredSlides:true,
  slidesPreview:1.6
}




 
  
  cart=[];
itens=[];

constructor( private cartPService:CartPService, private router:Router)
{
}

ngOnInit(){
  this.cart=this.cartPService.getCart();
  this.itens=this.cartPService.getProduct();     
  
  }
addToCartProduct(product){
this.cartPService.addProduct(product); 


}
openCart(){

  this.router.navigate(['cartP'])
}

}
