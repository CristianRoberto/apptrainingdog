import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import {StorageService} from '../storage.service';


import { PopoverController } from '@ionic/angular';
import { PopoverlogiComponent } from '../components/popoverlogi/popoverlogi.component';
import { PopoverregistroComponent } from '../components/popoverregistro/popoverregistro.component';
import { EditarperfilusuarioComponent } from '../components/editarperfilusuario/editarperfilusuario.component';



@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.page.html',
  styleUrls: ['./perfilusuario.page.scss'],
})
export class PerfilusuarioPage implements OnInit {
  public characters:any = [];
  user: any;

  constructor(private RestService:RestService, 
    public popover: PopoverController,
    private storage:StorageService) {}
  
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('datos'));
    console.log(this.user)
}



  //botonComponenteIrLogin
  async editarperfil(){
    const alert = await this.popover.create({
      component: EditarperfilusuarioComponent,
      mode:'ios',
      cssClass: 'pop-over-style1',
      });
    return await alert.present()
       }

 salire(){
  localStorage.clear();
//  location.reload(true)
}

}
