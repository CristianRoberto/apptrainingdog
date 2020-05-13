import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private datas=[
    
    {id:1,name:'Manzana', price:'8' ,img :"https://image.freepik.com/vector-gratis/coleccion-diferentes-tipos-snacks_23-2147927928.jpg"},
    {id:2,name:'Manzana', price:'6' ,img :"https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png"},
    {id:3,name:'Pera', price:'8' ,img :"https://lookformedical.com/img/a/a4/Pear_peckham_78.jpg"},
    {id:4,name:'Manzana', price:'8' ,img :"https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png"},
    {id:5,name:'Uva', price:'6' ,img :"https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png"},
    {id:6,name:'Pera', price:'8' ,img :"https://lookformedical.com/img/a/a4/Pear_peckham_78.jpg"},
    {id:7,name:'Manzana', price:'8' ,img :"https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png"},
    {id:8,name:'Uva', price:'6',img :"https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png"} ,
    {id:9,name:'Pera', price:'8',img :"https://lookformedical.com/img/a/a4/Pear_peckham_78.jpg"},
    {id:10,name:'Manzana', price:'8',img :"https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png"},
    {id:11,name:'Pera', price:'8',img :"https://lookformedical.com/img/a/a4/Pear_peckham_78.jpg"},
    {id:12,name:'Manzana', price:'8',img :"https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png"},
    
    ]; 
    


  constructor() { }


  getProduct(){
    return this.datas;   
    }
  

}
