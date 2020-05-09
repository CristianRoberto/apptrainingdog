import { Component, OnInit, NgModule } from '@angular/core';


import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


import { from } from 'rxjs';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  
  constructor(public auth: AngularFireAuth) { 
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

}

