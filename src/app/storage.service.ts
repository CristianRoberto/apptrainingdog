import { Injectable } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private localStorageService;
  private currentSession:SessionService=null;

  constructor(private router:Router) { 
      this.localStorageService=localStorage;
      this.currentSession=this.CargarDatos();
  }

  CargarDatos():SessionService{
       let datos=this.localStorageService.getItem("datos");
       return (datos) ? <SessionService> JSON.parse(datos):null;
  }

  getCurrentUser(){
    var session: SessionService = this.CargarDatos();
    return (session && session.token) ? session.token : null;
  };

  CrearSession(session:SessionService){
      this.currentSession=session;
      this.localStorageService.setItem('datos', JSON.stringify(session));
  }

  CerrarSession(){
    this.localStorageService.removeItem('datos');
    this.currentSession = null;
    this.router.navigate(['/princi']);
  }


  Autenticado(): boolean {
    return (this.getCurrentUser() != null) ? true : false;
  };

}