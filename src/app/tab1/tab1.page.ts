import { Component, OnInit } from '@angular/core';
import {CartPService} from '../servicios/cart-p.service' 
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})




export class Tab1Page implements OnInit{

  
 slideOptsOne=
  {
    slidesPerView: 1.5,
  };



  slideOptsTwo=
  {
    slidesPerView: 2.5,
  };



itens2=[];
 
  
itens3=[];
 
  cart=[];
itens=[];

constructor( private cartPService:CartPService, private router:Router)
{
}

ngOnInit(){
  this.cart=this.cartPService.getCart();
  this.itens=this.cartPService.getProduct();     

  this.itens2=this.cartPService.getData2(); 

  this.itens3=this.cartPService.getData3(); 
  console.log(this.itens3)
  }
addToCartProduct(product){
this.cartPService.addProduct(product); 


} 
openCart(){

  this.router.navigate(['cartP'])
}

}
