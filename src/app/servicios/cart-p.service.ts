import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartPService {
  private data=[
    {
      category: 'Tienda 1', 
      expanded: true,
      id:1,
          products: [
            {id:1,name:'Manzana', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'},
            {id:2,name:'Uva', price:'6',img:'https://i.pinimg.com/originals/b2/3c/b9/b23cb979f73dad7f8d6a2905c7fb5eb3.jpg'},
            {id:3,name:'Pera', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'},
            {id:4,name:'Pera', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'},
            {id:5,name:'Pera', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'},
            {id:6,name:'Pera', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'}

          ]
    }/*, 
    {      category:'tienda 2',
      expanded:true,
      id:2,
          products:[
            {id:1,name:'Manzana', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631 '},
            {id:2,name:'Uva', price:'6',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'},
            {id:3,name:'Pera', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'}
    
            
          ]
    
    },
    {
      id:3,
      category: 'Tienda 3', 
      expanded: true,
          products: [
            {id:1,name:'Manzana', price:'8'},
            {id:2,name:'Uva', price:'6'},
            {id:3,name:'Pera', price:'8'},
            {id:4,name:'Pera', price:'8'},
            {id:5,name:'Pera', price:'8'},
            {id:6,name:'Pera', price:'8'}

          ]
    }
    */
    
    ]; 


    data2=[
      {id:1,name:'Manzana', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631 '},
      {id:2,name:'Uva', price:'6',img:'https://image.freepik.com/foto-gratis/maxi-hamburguesa-doble-hamburguesa-ingredientes-voladores-aislados-sobre-fondo-madera_158023-173.jpg'},
      {id:3,name:'Pera', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'}

      
    ]



    data3=[
      {id:1,name:'Manzana', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631 '},
      {id:2,name:'Uva', price:'6',img:'https://image.freepik.com/foto-gratis/maxi-hamburguesa-doble-hamburguesa-ingredientes-voladores-aislados-sobre-fondo-madera_158023-173.jpg'},
      {id:3,name:'Pera', price:'8',img:'http://i1.wp.com/www.ofertasahora.com/wp-content/uploads/2013/09/Pizza-Hut-promocion-de-pan-pizza-23sep13.jpg?fit=747%2C631'}

      
    ]

    
    
    private cart = []; 
    
    
      constructor() { 
    
    
      }
      
    
getData2(){
return this.data2

}

getData3(){
return this.data3; 

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
