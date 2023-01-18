import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import {UserService} from '../../servicios/user.service';
import { ToastController,LoadingController } from '@ionic/angular';
import {StorageService} from '../../storage.service';
import {SessionService} from '../../session.service';


@Component({
  selector: 'app-popoverlogi',
  templateUrl: './popoverlogi.component.html',
  styleUrls: ['./popoverlogi.component.scss'],
})
export class PopoverlogiComponent implements OnInit {

  
  formulario:FormGroup;
  mensaje:string="";
  datos:SessionService;
  token:string="";
  logueado:Boolean=false;
  
  constructor(private form:FormBuilder, private servicio: UserService,public toast: ToastController,public popover: PopoverController, private storage:StorageService) {
  //aqi se hace llamado a los datos que se envian del from
    this.formulario=this.form.group({
       usuario:['',[Validators.required, Validators.email]],
       password:['',Validators.required],
       rut: ['', [Validators.pattern("[0-9]-"),Validators.max(9)]]
     });
  }
 




  ngOnInit(){
    /*let datos= JSON.parse(localStorage.getItem('sitiomovil'));
    if(datos && datos.usuario){
        window.location.href="/privado";
    }*/

    //if(this.storage.getCurrentUser()){
      //this.logueado=true;
     // this.mensaje="Usted ya se encuentra logueado";
    //}

  }


  ValidarLogin(){
  if(this.formulario.valid){      
      this.servicio.Token().subscribe(token=>{
         this.token=token;
         this.servicio.ValidarLogin(this.formulario.get("usuario").value, this.formulario.get("password").value,this.token).subscribe(datos=>{
          console.log(datos);
          if(datos.length==0){
                this.mensaje="Login no existe, Verificar Datos";
           }else{
              datos={token:datos[0].id,usuario:datos[0].correoelectronico,nombre:datos[0].nombre,apellidos:datos[0].apellidos,direccion:datos[0].direccion,foto:datos[0].foto};
              this.storage.CrearSession(datos);            
              window.location.href="/tabs";
              this.presentToast('Datos Correcto, Bienvenido')

              
           }

      })
      });
     } else{
      this.presentToast('Campos Vacios o formato incorrecto')

  }
}


  //funcion boton que me dirige a la pantalla registro
  async registrarse(){
    await this.popover.dismiss({
      cont:0
     });
  }
  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}