import { Component, OnInit, NgModule } from '@angular/core';


import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';

import { from } from 'rxjs';
import { NgModel } from '@angular/forms';

import {UserService} from '../servicios/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  public fil:any={};
  constructor(private router: Router,public auth: AngularFireAuth,public userservi: UserService,public toast: ToastController ) { 
    }

    login() {
      console.log('e')
      this.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    logout() {
    //  this.auth.signOut();
    }
   

  ngOnInit() {
  }

  ingresar (proveedor: String){
    console.log(proveedor);
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  get_logi(correo,pass){
    console.log(correo)
      this.userservi.get_logi(correo).then(res=>{
       
        console.log(res)
       this.mese(res,pass)
      }).catch(e=>{
      this.presentToast('Error servidor')
      })      
  } 

   mese(res,pass){
     if(res.true){
         if(res.true==pass){
          this.presentToast('Exito')
          //////////
          localStorage.setItem('login','si')
         this.router.navigate(['/tabs/tab3']);
         }else{
          this.presentToast('Clave Incorrecta')
         }
    }else{
       this.presentToast(res.false);
     }
   }

}

