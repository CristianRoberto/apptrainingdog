import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../servicios/category.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit{



  constructor( private categoryService:CategoryService ,private router :Router, private navctrl:NavController) {}

//VARIABLES 
categoryP=[];
ngOnInit(){

  this.categoryP=this.categoryService.getCategory(); 
 
}

changePage(){
this.router.navigate(['/store'])

}



}
