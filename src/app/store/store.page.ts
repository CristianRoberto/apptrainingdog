import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

changePage(){
this.router.navigate(['/productt'])
console.log("cambioxxxxxxx")

}

}
