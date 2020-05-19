import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {private datas=[
    
  {id:1,name:'PescachoP', propietario:'PROPIETARIO' , nombrep:'Sr. Roberto Gilces', ubicacion:'UBICACION', direccion:'Leonidas Plaza', region:'Manabi - Ecuador',  img :"https://image.freepik.com/vector-gratis/coleccion-diferentes-tipos-snacks_23-2147927928.jpg"},
  {id:2,name:'La Curva', tipo:'Pescaderia' ,direccion:'Av 24 y Calle 17', img :"https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png"},
  {id:3,name:'Las Vegas', tipo:'Ferreteria' ,direccion:'Av 24 y Calle 17', img :"https://lookformedical.com/img/a/a4/Pear_peckham_78.jpg"},
  {id:4,name:'El Imperio', tipo:'Restaurant' ,direccion:'Av 24 y Calle 17', img :"https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png"},
  {id:5,name:'La Luna', tipo:'Carniceria' ,direccion:'Av 24 y Calle 17', img :"https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png"},
  {id:6,name:'Manzanita', tipo:'Pescaderia' ,direccion:'Av 24 y Calle 17', img :"https://lookformedical.com/img/a/a4/Pear_peckham_78.jpg"},
  {id:7,name:'Los Santos', tipo:'Ferreteria' ,direccion:'Av 24 y Calle 17', img :"https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png"},
  {id:8,name:'Las Venturas', tipo:'Restaurant',direccion:'Av 24 y Calle 17', img :"https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png"} ,
  {id:9,name:'San Fierro', tipo:'Carniceria',direccion:'Av 24 y Calle 17', img :"https://lookformedical.com/img/a/a4/Pear_peckham_78.jpg"},
  {id:10,name:'Campo', tipo:'Pescaderia',direccion:'Av 24 y Calle 17', img :"https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png"},
  {id:11,name:'Carl Jhonson', tipo:'Ferreteria',direccion:'Av 24 y Calle 17', img :"https://lookformedical.com/img/a/a4/Pear_peckham_78.jpg"},
  {id:12,name:'San Andreas', tipo:'Restaurant',direccion:'Av 24 y Calle 17', img :"https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png"},
  
  ]; 
  


constructor() { }


getTienda(){
  return this.datas;   
  }


}
