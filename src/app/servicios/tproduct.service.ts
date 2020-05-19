import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TproductService {

  private data=[
    {
      category: 'Frutas Y legumbres', 
      expanded: false,
          products: [
            {id:0,name:'Manzana', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'},
            {id:0,name:'Uva', price:'6',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'},
            {id:0,name:'Pera', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'},
            {id:0,name:'Pera', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'},
            {id:0,name:'Pera', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'},
            {id:0,name:'Pera', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'}

          ]
    }, 
    {
      category:'Carnes',
      expanded:false,
          products:[
            {id:0,name:'Manzana', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631 '},
            {id:0,name:'Uva', price:'6',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'},
            {id:0,name:'Pera', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'},
            {id:0,name:'Pera', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'},
            {id:0,name:'Pera', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'}

          ]
    
    },
    {
      category: 'Enlatados', 
      expanded: false,
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
