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
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Perfil",
        url   : "/user",
        icon  : "person-outline"
      },
      {
        title : "Login",
        url   : "../login",
        icon  : "person-outline"
      },
      {
        title : "Enlatados y Convservass",
        url   : "../tabs/tab3",
        icon  : "flash-outline"
      },
      {
        title : "Carnes y Embutidos",
        url   : "../tabs/tab3",
        icon  : "glasses-outline"
      },
      {
        title : "Pescados y Mariscos",
        url   : "../tabs/tab3",
        icon  : "glasses-outline"
      },
      {
        title : "Licoreria",
        url   : "../tabs/tab3",
        icon  : "beer-outline"
      },
      {
        title : "Carrito",
        url   : "../tabs/tab4",
        icon  : "beer-outline"
      }
    ]
  }
}
