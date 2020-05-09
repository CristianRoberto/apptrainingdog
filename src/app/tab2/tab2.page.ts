import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private ProductoService:ProductoService,private router:Router ) {

  }

products=[]

  ngOnInit(){
 this.products= this.ProductoService.getProduct(); 
console.log(this.products);

}
  
}
