import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.page.html',
  styleUrls: ['./view-orders.page.scss'],
})
export class ViewOrdersPage implements OnInit {
  orders: any = {}
  constructor(public navParams: NavParams, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.orders = JSON.parse(this.navParams.get('data'));
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }

}
