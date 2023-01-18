import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';


@Component({
  selector: 'app-trabajenosotros',
  templateUrl: './trabajenosotros.page.html',
  styleUrls: ['./trabajenosotros.page.scss'],
})
export class TrabajenosotrosPage implements OnInit {

  constructor(private storage:StorageService) { }

  ngOnInit() {
    if(!this.storage.getCurrentUser()){
      window.location.href="/princi";
  }
}

}
