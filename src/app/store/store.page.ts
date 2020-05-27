import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../servicios/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  constructor(private router:Router , private storesv:StoreService) {

   }

 storeT=[]; 
 
   ngOnInit() {
 this.storeT=this.storesv.getStore();  
 console.log(this.storeT); 
 
  }

changePage(){
this.router.navigate(['/productt'])

}

}
