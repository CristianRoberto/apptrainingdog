import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {firebaseConfig} from '../environments/firebaseconfig';
import {AngularFireModule} from '@angular/fire';

import { auth } from 'firebase/app';

import { from } from 'rxjs';
import { AngularFireAuthModule, AngularFireAuth } from '@Angular/fire/auth';
import { ComponentModule} from './component/component.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { UserService } from './servicios/user.service';

import { PopoverlogiComponent } from 'src/app/components/popoverlogi/popoverlogi.component';
import { PopoverregistroComponent } from 'src/app/components/popoverregistro/popoverregistro.component';
import { IngresomascotaComponent } from './components/ingresomascota/ingresomascota.component';
import { EditarperfilusuarioComponent } from './components/editarperfilusuario/editarperfilusuario.component';
import { RegistroadoptacionComponent } from './components/registroadoptacion/registroadoptacion.component';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    PopoverlogiComponent,
    PopoverregistroComponent, 
    IngresomascotaComponent,
    EditarperfilusuarioComponent,
    RegistroadoptacionComponent
    
  ],
  imports: [  
    ComponentModule,
    ComponentsModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig)],
  providers: [
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireAuth,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
