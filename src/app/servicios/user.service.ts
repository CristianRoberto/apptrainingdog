import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:any ='http://localhost:3000/';


  constructor(private http:HttpClient) { }

  get_logi(correo){
      return this.http.get(this.url+"logi?correo="+correo,
        {headers:{"Content-Type":"application/json"}}).toPromise()
  }


}
