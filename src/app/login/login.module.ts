import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@NgModule({
  providers: [ AngularFireAuth ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //AngularFireAuth,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {

}
