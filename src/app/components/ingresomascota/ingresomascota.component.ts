import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import {UserService} from '../../servicios/user.service';
import { ToastController,LoadingController } from '@ionic/angular';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
//import {LoginService} from '../login.service';
//import {StorageService} from '../storage.service';
import {ComponentsModule} from '../components.module';


@Component({
  selector: 'app-ingresomascota',
  templateUrl: './ingresomascota.component.html',
  styleUrls: ['./ingresomascota.component.scss'],
})
export class IngresomascotaComponent implements OnInit {

  logueado:Boolean=false;
  mensaje:string="";
 
 elementos = {
    foto: "",
     };
     
  public archivoCargado;
  public totalArchivoCargado = 0;
  public tamanioArchivoCargado = 0;
  constructor(public popover: PopoverController,public toast: ToastController,private servicio: UserService) { }

  ngOnInit(){
    /*let datos= JSON.parse(localStorage.getItem('sitiomovil'));
    if(datos && datos.usuario){
        window.location.href="/privado";
    }*/

  }
 

 cargaArchivo(archivo) { 
    this.archivoCargado = archivo[0];
    this.totalArchivoCargado = archivo.length;
    this.tamanioArchivoCargado = archivo[0].size/1024;
    let externsion =this.getFileExtension(this.elementos.foto)
    if(externsion =='JPG' || externsion =='jpg'|| externsion =='PNG'|| externsion =='png' ){

    }else{
      this.archivoCargado =null;
      this.totalArchivoCargado=0;
      this.tamanioArchivoCargado=0;
      this.elementos.foto="";
      return this.presentToast("Solo se aceptan  archivo en formato Png y Jpg");
    }
  }

  getFileExtension(filename) {
    return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
  }


  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }



}