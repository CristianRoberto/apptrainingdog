import { Component, OnInit } from '@angular/core';
import { ToastController,LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import {UserService} from '../../servicios/user.service';
import { PopoverController } from '@ionic/angular';



@Component({
  selector: 'app-popoverregistro',
  templateUrl: './popoverregistro.component.html',
  styleUrls: ['./popoverregistro.component.scss'],
})
export class PopoverregistroComponent implements OnInit {
  logueado:Boolean=false;
  mensaje:string="";
 
 elementos = {
    formato: "",
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
    let externsion =this.getFileExtension(this.elementos.formato)
    if(externsion =='JPG' || externsion =='jpg'|| externsion =='PNG'|| externsion =='png' ){

    }else{
      this.archivoCargado =null;
      this.totalArchivoCargado=0;
      this.tamanioArchivoCargado=0;
      this.elementos.formato="";
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

  Guardar(producForm: NgForm){
    console.log(producForm)
    if(producForm.valid){
      if(producForm.value.telefono.length==10 && producForm.value.cedula.length==10  ){
        let archivo = this.archivoCargado;
        let reader = new FileReader();
        reader.readAsDataURL(archivo);
        reader.onload = () => {
          let archivoByte = reader.result;
          archivoByte = archivoByte.toString();
          producForm.value.foto=archivoByte
           console.log(producForm.value)
            this.servicio.postuser(producForm.value).then(async(re:any)=>{
              if(re.false){
                 this.presentToast('Error al guardar')
              }else{
                this.presentToast('Cuenta Creada correctamente')
                await this.popover.dismiss({
                  cont:1
                 });
              }
            }).catch((e)=>{
               this.presentToast('Error de conexion')
            })
          };
       }else{
         this.presentToast('Cedula y Telefono,tienen que tener 10 digitos')
       }
       
    }else{
      this.presentToast('Campos Vacios o datos con formato incorrecto ')
    }
  }

}
