import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  private datas=[

    {id:1,name:'PESCADOS Y MARICOS ', quantity:'' ,img :"https://mercatperegarau.es/wp-content/uploads/2016/12/315_Francisco-Riera-Llorens-Maria-del-Carmen-del-%C3%81lamo-Acevedo-Peix-Peixateria-Vicenta-Pto-86-87-88_078.jpg"},
    {id:1,name:'RESTAURANTE Y COMIDA RAPIDA ', quantity:'' ,img :"https://mercatperegarau.es/wp-content/uploads/2016/12/315_Francisco-Riera-Llorens-Maria-del-Carmen-del-%C3%81lamo-Acevedo-Peix-Peixateria-Vicenta-Pto-86-87-88_078.jpg"},
    {id:1,name:'TIENDA DE VIVERES ', quantity:'' ,img :"https://mercatperegarau.es/wp-content/uploads/2016/12/315_Francisco-Riera-Llorens-Maria-del-Carmen-del-%C3%81lamo-Acevedo-Peix-Peixateria-Vicenta-Pto-86-87-88_078.jpg"},
    {id:1,name:'LICORERIAS ', quantity:'' ,img :"https://mercatperegarau.es/wp-content/uploads/2016/12/315_Francisco-Riera-Llorens-Maria-del-Carmen-del-%C3%81lamo-Acevedo-Peix-Peixateria-Vicenta-Pto-86-87-88_078.jpg"},
    {id:1,name:'CARNES Y POLLOS', quantity:'' ,img :"http://www.comercialcastro.cl/img/uploads/como-amaciar-carnes.jpg"},
    {id:2,name:'Frutas y Verduras', quantity:'' ,img :"https://content.paodeacucar.com/wp-content/uploads/2018/09/verduras-de-setembro-capa.jpg"},
    {id:1,name:'Panaderia', quantity:'' ,img :"http://www.somosgrupomas.com/wp-content/uploads/2019/07/panes-con-masa-madre-natural.jpg"}
  


    
    ]; 




  constructor() { }

getCategory(){
return this.datas; 

}


}

