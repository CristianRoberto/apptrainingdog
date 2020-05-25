import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  nameuser:any=null;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    
    private statusBar: StatusBar
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

  openmenu(){
    let res= localStorage.getItem('login');
    console.log(res);
    if(res==='si'){
     this.nameuser='peter';
    }else{
      this.nameuser=null
    }

  }
  cerr(){
    localStorage.setItem('login','no')
  }

  sideMenu()
  {
    this.navigate =
    [

      
      {
        title : "MiPerfil",
        url   : "/user",
        icon  : "person-outline"
      },
      {
        title : "Login",
        url   : "../login",
        icon  : "person-outline"
      },
        
      {
        title : "Trabaje con Nosotros",
        url   : "../agregartiendas",
        icon  : "glasses-outline"
      
      },

    ]
  }
}
