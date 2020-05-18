import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  private datas=[

    {id:1,name:'Tienda de Viveres ', quantity:'20' ,img :"https://i0.wp.com/exitosanoticias.pe/v1/wp-content/uploads/2020/03/supermercados.png"},
    {id:1,name:'Restaurantes y Comida Rapida ', quantity:'20' ,img :"https://www.innaturale.com/cdn-cgi/image/www.innaturale.com/es/wp-content/webp-express/webp-images/doc-root/es/wp-content/uploads/2018/11/restaurantes-de-comida-rapida-menus.jpg.webp"},
    {id:1,name:'Pescados y Mariscos ',quantity:'20' ,img :"https://mercatperegarau.es/wp-content/uploads/2016/12/315_Francisco-Riera-Llorens-Maria-del-Carmen-del-%C3%81lamo-Acevedo-Peix-Peixateria-Vicenta-Pto-86-87-88_078.jpg"},
    {id:1,name:'Carnes y Pollo ', quantity:'25' ,img :"http://www.comercialcastro.cl/img/uploads/como-amaciar-carnes.jpg"},
    {id:2,name:'Frutas Y legumbres', quantity:'13' ,img :"https://content.paodeacucar.com/wp-content/uploads/2018/09/verduras-de-setembro-capa.jpg"},
    {id:1,name:'Panaderia y Desayunos', quantity:'30' ,img :"http://www.somosgrupomas.com/wp-content/uploads/2019/07/panes-con-masa-madre-natural.jpg"},
   {id:1,name:'Licoreria ', quantity:'20' ,img :"https://www.ultimasnoticias.ec/files/article_main/uploads/2018/04/25/5ae0e9d7df34b.jpeg" }


    
    ]; 




  constructor() { }

getCategory(){
return this.datas; 

}


}

