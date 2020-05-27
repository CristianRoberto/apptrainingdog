import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private datas=[

    {id:1,name:'Tienda Andrade ', distance:'20' ,img :"https://i0.wp.com/exitosanoticias.pe/v1/wp-content/uploads/2020/03/supermercados.png", score:"9.1", tipe:"Tienda", place:"Barrio 15 de abril",type:"tienda", description:"Carnes legumbres, aseo y más"},
    {id:2,name:'Tienda Andrade ', distance:'20' ,img :"https://static.iris.net.co/dinero/upload/images/2014/10/2/201725_123311_1.jpg", score:"9.1", tipe:"Tienda", place:"Barrio 15 de abril",type:"tienda", description:"Carnes legumbres, aseo y más"},
    {id:3,name:'Tienda Andrade ', distance:'20' ,img :"https://i0.wp.com/exitosanoticias.pe/v1/wp-content/uploads/2020/03/supermercados.png", score:"9.1", tipe:"Tienda", place:"Barrio 15 de abril", type:"tienda", description:"Carnes legumbres, aseo y más"},
    {id:4,name:'Tienda Andrade ', distance:'20' ,img :"https://i0.wp.com/exitosanoticias.pe/v1/wp-content/uploads/2020/03/supermercados.png", score:"9.1", tipe:"Tienda", place:"Barrio 15 de abril",type:"tienda", description:"Carnes legumbres, aseo y más"},
    {id:5,name:'Tienda Andrade ', distance:'20' ,img :"https://i0.wp.com/exitosanoticias.pe/v1/wp-content/uploads/2020/03/supermercados.png", score:"9.1", tipe:"Tienda", place:"Barrio 15 de abril",type:"tienda", description:"Carnes legumbres, aseo y más"}






    
    ]; 







  constructor() { }


  getStore(){
    return this.datas; 
    
    }

}
