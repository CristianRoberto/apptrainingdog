import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class UserService {
//  get_logi(correo: any) {
  //  throw new Error('Method not implemented.');
  //}
  url:any ='http://localhost:5000/users';
  url2:any ='http://localhost:5000/';
  url3:any ='http://localhost:5000/reportes';

  url4:any ='http://localhost:5000/mascotas';


  constructor(private http:HttpClient) {   
  }

  //este es un servicio creo una funcion validar login permite atravez del get conectarme al bankEnd
  ValidarLogin(usuario:string,password:string,token:string):Observable<any>{
    let headers=new HttpHeaders();
    headers= headers.append('Content-Type', 'application/json');
    headers= headers.append('access-token',token);
    
    
    const params = new HttpParams();
    params.set("usuario",usuario);
    params.set("password", password); //Create new HttpParams
     //return this.http.get(`${environment.apiUrl}/login`,{params:params});
     //let url=`${environment.apiUrl}/login?usuario=${JSON.stringify(usuario)}&password=${JSON.stringify(password)}`;
     return this.http.get(`${environment.apiUrl}/usrs?usuario=${usuario}&password=${password}`,{ 'headers': headers });
  }

  Token():Observable<any>{
     return this.http.get(`${environment.apiUrl}/usrs`);
  }

  //servicioUsuario//registrar  nuevo usuarios
  postuser(users){
    return this.http.post(this.url, users,
  {headers:{"Content-Type":"application/json"}}).toPromise()
  }

//servicio Reporte Abandono
  postreportesabandono(password){
    return this.http.post(this.url, password,
  {headers:{"Content-Type":"application/json"}}).toPromise();
}

//servicioIngresarMascota//registrar  nueva mascota
postmascotas(foto){
  return this.http.post(this.url4, foto,
{headers:{"Content-Type":"application/json"}}).toPromise();
}

}