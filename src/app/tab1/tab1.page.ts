import { Component, OnInit } from '@angular/core';
import {CartPService} from '../servicios/cart-p.service' 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

 
  // aki se tra jajaja que pendejada xd ya hago 
  cart=[];
itens=[];

constructor( private cartPService:CartPService){
}

ngOnInit(){
  this.cart=this.cartPService.getCart();
  this.itens=this.cartPService.getProduct();     
  console.log(this.itens)
  }


}
