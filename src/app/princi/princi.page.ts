import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { PopoverlogiComponent } from '../components/popoverlogi/popoverlogi.component';
import { PopoverregistroComponent } from '../components/popoverregistro/popoverregistro.component';
import {UserService} from '../servicios/user.service';
import {StorageService} from '../storage.service';



@Component({
  selector: 'app-princi',
  templateUrl: './princi.page.html',
  styleUrls: ['./princi.page.scss'],
})
export class PrinciPage implements OnInit {

  formulario:FormGroup;
  mensaje:string="";
  token:string="";
  logueado:Boolean=false;


  constructor(private form:FormBuilder,
   public popover: PopoverController,
   private servicio:UserService, 
   private storage:StorageService) { }

 ngOnInit(){

if(this.storage.getCurrentUser()){
      window.location.href="/tabs";
    }
  }
   

  

  
  
  //botonComponenteIrLogin
  async login(){
    const alert = await this.popover.create({
      component: PopoverlogiComponent,
      mode:'ios',
      cssClass: 'pop-over-style1',
      });
      
      alert.onDidDismiss().then((dataReturned) => {         
          if(dataReturned.data){
            //this.search();
            // this.presentToast("Modificado con correctamente")

            if(dataReturned.data.cont==0){
                this.regstro()
            }else if(dataReturned.data.cont==1){
              console.log(dataReturned.data);
             // this.fot=dataReturned.data.data.foto;
              //this.logue=dataReturned.data.data.name;
              //this.blo=1;
             // localStorage.setItem('foto',dataReturned.data.data.foto);
              //localStorage.setItem('name',dataReturned.data.data.name);
              //localStorage.setItem('login','true');
            //  this.salir=true;
            }
         }
    });
    return await alert.present()
          
  }

  //botonComponenteIrRegistro
  
  async regstro(){
    const alert2 = await this.popover.create({
      component: PopoverregistroComponent,
      mode:'ios',
      cssClass: 'pop-over-style2',
    });

    alert2.onDidDismiss().then((dataReturned) => {         
        
      if(dataReturned.data){
        //this.search();
        // this.presentToast("Modificado con correctamente")
          if(dataReturned.data.cont==1){
            this.login()
           }
      }
   });
  return await alert2.present()
 }

 log(){
  if(localStorage.getItem('login')){
    console.log(localStorage.getItem('login'))
   //this.fot=localStorage.getItem('foto');
   //this.logue=localStorage.getItem('name');
   //this.blo=1;
   //this.salir=true;
  }else{
   //this.salir=false;
   //this.blo=0;
  }
 }
 salire(){
  localStorage.clear();
//  location.reload(true)
}

}
