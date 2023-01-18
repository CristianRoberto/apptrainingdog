import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { RestService } from '../rest.service';

import { RegistroadoptacionComponent } from "../components/registroadoptacion/registroadoptacion.component";
import { PopoverController } from '@ionic/angular';


@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {

  chracter;
  respuesta;
  profileId: string;
//  chracter;

  constructor(
    private route:ActivatedRoute,
    private http: HttpClient,
    public popover: PopoverController,
    private activatedRoute: ActivatedRoute,
    private RestService:RestService
  ) {}
  
  ngOnInit(): void {
    this.profileId = this.activatedRoute.snapshot.paramMap.get("id");
       this.route.paramMap.subscribe((paramMap:any)=>{
        const{params}=paramMap
        console.log(params.variable);
        this.cargarData(params.variable)

       })
      }

     public cargarData(id:string){
        //hago la peticion al servicio RESTSERVICE
        this.RestService.get(`http://localhost:5000/mascotas/${this.profileId}`)
        .subscribe(respuesta =>{
          this.chracter = respuesta;
          console.log(respuesta)
        })
    
      }


        //botonComponenteIrLogin
  
        async login(){
          const alert = await this.popover.create({
            component: RegistroadoptacionComponent,
            mode:'ios',
            cssClass: 'pop-over-style1',
            });
          return await alert.present()
             }

    }
      