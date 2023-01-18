import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page  implements OnInit {
  public characters:any = [];

  constructor(private RestService:RestService) {}
  
  ngOnInit(): void {
this.cargarData()
  }

  public cargarData(){
    //hago la peticion al servicio RESTSERVICE
    this.RestService.get(`http://localhost:5000/mascotas`)
    .subscribe(respuesta =>{
      this.characters = respuesta;
      console.log(respuesta)
    })

  }
}

