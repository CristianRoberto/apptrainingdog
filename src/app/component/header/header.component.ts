import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input () titulo:String;
  @Input () cam:boolean;
  
  constructor() { }
 
  ngOnInit() {
    console.log(this.titulo)
    
    console.log(this.cam)
  
  }

}
