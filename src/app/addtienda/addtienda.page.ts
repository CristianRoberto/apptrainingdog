import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../servicios/tienda.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalProductPage } from '../modal/modal-product/modal-product.page';

@Component({
  selector: 'app-addtienda',
  templateUrl: './addtienda.page.html',
  styleUrls: ['./addtienda.page.scss'],
})
export class AddtiendaPage implements OnInit {
  constructor(private TiendaService:TiendaService, private router:Router, private modalctr:ModalController ) {

  }
  
  tienda=[]

  ngOnInit(){
    //obtiene los productos del servicio ProductoService  y los guarda en un arreglo
 this.tienda= this.TiendaService.getTienda(); 

  }

  

  
}
