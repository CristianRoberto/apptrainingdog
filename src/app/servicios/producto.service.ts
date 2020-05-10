import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private datas=[
    
    {id:0,name:'Manzana', price:'8'},
    {id:0,name:'Uva', price:'6'},
    {id:0,name:'Pera', price:'8'},
    {id:0,name:'Manzana', price:'8'},
    {id:0,name:'Uva', price:'6'},
    {id:0,name:'Pera', price:'8'},
    {id:0,name:'Manzana', price:'8'},
    {id:0,name:'Uva', price:'6'},
    {id:0,name:'Pera', price:'8'},
    {id:0,name:'Manzana', price:'8'},
    {id:0,name:'Uva', price:'6'},
    {id:0,name:'Pera', price:'8'}
    ]; 
    


  constructor() { }


  getProduct(){
    return this.datas;   
    }
  

}
