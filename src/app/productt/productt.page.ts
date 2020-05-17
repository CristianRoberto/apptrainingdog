import { Component, OnInit } from '@angular/core';
import { CartPService } from '../servicios/cart-p.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productt',
  templateUrl: './productt.page.html',
  styleUrls: ['./productt.page.scss'],
})
export class ProducttPage implements OnInit {

  constructor(private cartPService:CartPService, private router:Router) { }


  card=[];
  itens=[];
  ngOnInit() {
    this.card=this.cartPService.getCart();
    this.itens=this.cartPService.getProduct();     
    

  }


  
  addToCartProduct(product){
  this.cartPService.addProduct(product); 
  
  
  } 
  openCart(){
  
    this.router.navigate(['cartP'])
  }
  



}
