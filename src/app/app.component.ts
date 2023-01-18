import { Component, OnInit } from '@angular/core';

import { AlertController, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PopoverController } from '@ionic/angular';
import { PopoverlogiComponent } from 'src/app/components/popoverlogi/popoverlogi.component';
import { PopoverregistroComponent } from 'src/app/components/popoverregistro/popoverregistro.component';
//import {StorageService} from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
 
  navigate: { title: string; url: string; icon: string; }[];

  sideMenu()
  {
    this.navigate =
    [      
      {
        title : "MiPerfil",
        url   : "/perfilusuario",
        icon  : "person-circle-sharp"
      }, 
      {
        title : "PerfilAdminitrador",
        url   : "/perfiladministrador",
        icon  : "person-circle-sharp"
      }, 
      {
        title : "Trabaje con Nosotros",
        url   : "/trabajenosotros",
        icon  : "fitness-sharp"
      },
      {
        title : "MiPerfil",
        url   : "/user",
        icon  : "person-circle-sharp"
      }, 
    

    ]
  }


  
  constructor(
    public alertController: AlertController,
    public navCtrl: NavController,
    //private storage:StorageService,
    private platform: Platform,
    private splashScreen: SplashScreen,   
    private statusBar: StatusBar,
    public popover: PopoverController
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

    //mira en el local store al ejecutar esta pantalla tabs
    //si no encuentra datos en store te redirigue a la pantalla principál.
   // if(this.storage.getCurrentUser()){
   //   window.location.href="/tabs";
    }

     async salir(){
      const alert = await this.alertController.create({
        header: 'Salir',
        message: '¿Deberitas te quieres salir?',
        buttons: [
          {
            text: 'No mejor no',
            handler: () => {
              
            }
          }, {
            text: 'Sii',
            handler: () => {
              localStorage.clear();
              location.reload(true)
              this.navCtrl.navigateRoot('princi');
            }
          }
        ]
      });
  
      await alert.present();
    }
  
  





}