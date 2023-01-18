import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

    public token:string;
    public usuario:string;
    public nombre:string;
}
