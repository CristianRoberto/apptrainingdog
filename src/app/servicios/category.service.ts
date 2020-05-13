import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  private datas=[

    {id:1,name:'PESCADOS Y MARICOS ', quantity:'20' ,img :"https://mercatperegarau.es/wp-content/uploads/2016/12/315_Francisco-Riera-Llorens-Maria-del-Carmen-del-%C3%81lamo-Acevedo-Peix-Peixateria-Vicenta-Pto-86-87-88_078.jpg"},
    {id:1,name:'RESTAURANTE Y COMIDA RAPIDA ', quantity:'20' ,img :"    https://www.google.es/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Fvector-premium%2Fpersonas-que-compran-comida-rapida-interior-restaurante-comida-rapida-hamburguesas-bebidas_2135825.htm&psig=AOvVaw3vtv9-h0YtM_u6n-bfR97l&ust=1589465853456000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj9jPmDsekCFQAAAAAdAAAAABAJ"},
    {id:1,name:'TIENDA DE VIVERES ', quantity:'20' ,img :"https://mercatperegarau.es/wp-content/uploads/2016/12/315_Francisco-Riera-Llorens-Maria-del-Carmen-del-%C3%81lamo-Acevedo-Peix-Peixateria-Vicenta-Pto-86-87-88_078.jpg"},
    {id:1,name:'LICORERIAS ', quantity:'20' ,img :"https://mercatperegarau.es/wp-content/uploads/2016/12/315_Francisco-Riera-Llorens-Maria-del-Carmen-del-%C3%81lamo-Acevedo-Peix-Peixateria-Vicenta-Pto-86-87-88_078.jpg"},
    {id:1,name:'CARNES Y POLLOS', quantity:'25' ,img :"http://www.comercialcastro.cl/img/uploads/como-amaciar-carnes.jpg"},
    {id:2,name:'Frutas y Verduras', quantity:'13' ,img :"https://content.paodeacucar.com/wp-content/uploads/2018/09/verduras-de-setembro-capa.jpg"},
    {id:1,name:'Panaderia', quantity:'30' ,img :"http://www.somosgrupomas.com/wp-content/uploads/2019/07/panes-con-masa-madre-natural.jpg"}
  

    
    ]; 




  constructor() { }

getCategory(){
return this.datas; 

}


}

