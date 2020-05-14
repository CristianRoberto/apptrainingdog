import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartPService {
  private data=[
    {
      category: 'Tienda 1', 
      expanded: true,
          products: [
            {id:0,name:'Manzana', price:'8'},
            {id:0,name:'Uva', price:'6'},
            {id:0,name:'Pera', price:'8'},
            {id:0,name:'Pera', price:'8'},
            {id:0,name:'Pera', price:'8'},
            {id:0,name:'Pera', price:'8'}

          ]
    }, 
    {
      category:'tienda 2',
      expanded:true,
          products:[
            {id:0,name:'Manzana', price:'8'},
            {id:0,name:'Uva', price:'6'},
            {id:0,name:'Pera', price:'8'}
    
            
          ]
    
    },
    {
      category: 'Tienda 3', 
      expanded: true,
          products: [
            {id:0,name:'Manzana', price:'8'},
            {id:0,name:'Uva', price:'6'},
            {id:0,name:'Pera', price:'8'},
            {id:0,name:'Pera', price:'8'},
            {id:0,name:'Pera', price:'8'},
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
