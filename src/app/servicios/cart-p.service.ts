import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartPService {
  private data=[
    {
      category: 'Frutas', 
      expanded: true,
          products: [
            {id:0,name:'Manzana', price:'8'},
            {id:0,name:'Uva', price:'6'},
            {id:0,name:'Pera', price:'8'}
          ]
    }, 
    {
      category:'Favoritos',
      expanded:true,
          products:[
            {id:0,name:'Manzana', price:'8'},
            {id:0,name:'Uva', price:'6'},
            {id:0,name:'Pera', price:'8'}
    
            
          ]
    
    }
    
    
    ]; 
    
    private cart = []; 
    
    
      constructor() { 
    
    
      }
      
    
      getProduct(){
      return this.data;   
      }
    
    getCart(){
    return this.cart
    
    }
    
    addProduct(product){
    this.cart.push(product); 
    
    }  
}
