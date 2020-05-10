import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.page.html',
  styleUrls: ['./modal-product.page.scss'],
})
export class ModalProductPage implements OnInit {

  constructor(private modalCrl:ModalController) { }

  ngOnInit() {
  }

exit (){
this.modalCrl.dismiss(); 

}

}
