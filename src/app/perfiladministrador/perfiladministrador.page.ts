import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../storage.service';
import { PopoverController } from '@ionic/angular';
import { IngresomascotaComponent } from '../components/ingresomascota/ingresomascota.component';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-perfiladministrador',
  templateUrl: './perfiladministrador.page.html',
  styleUrls: ['./perfiladministrador.page.scss'],
})
export class PerfiladministradorPage implements OnInit {
  public characters:any = [];

  constructor(public popover: PopoverController, private RestService:RestService) { }

  ngOnInit() {
    this.cargarData()
  }

  public cargarData(){
    //hago la peticion al servicio RESTSERVICE
    this.RestService.get(`http://localhost:5000/mascotas`)
    .subscribe(respuesta =>{
      this.characters = respuesta;
      console.log(respuesta)
    })

  }

  //botonComponenteIrLogin
  async login(){
    const alert = await this.popover.create({
      component: IngresomascotaComponent,
      mode:'ios',
      cssClass: 'pop-over-style1',
      });
      
   
    return await alert.present()
          
  }


}
