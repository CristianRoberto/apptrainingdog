import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {ProviderService}   from '../provider.service';
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page implements OnInit {
  searchedUser: any;


  constructor(
    private http: HttpClient) {}
  
  
  ngOnInit(){
  //  this.permission = true;
  //this.getUsers().subscribe(res=>{
    //this.users= res;
   // this.searchedUser = this.users;

  //});
}


  searchCustomer(event){
    const text = event.target.value;
   // this.searchedUser = this.users;
    if(text && text.trim() !=''){
      this.searchedUser =this.searchedUser.filter((user: any)=>{
        return(user.name.toLoweCase().indexOf(text.toLowecase()) >-1  );
            })
          }
    }

  }



