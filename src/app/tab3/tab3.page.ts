import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../servicios/category.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit{



  constructor( private categoryService:CategoryService) {}

//VARIABLES 
categoryP=[];
ngOnInit(){

  this.categoryP=this.categoryService.getCategory(); 
 
}




}
