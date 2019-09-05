import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-qrcode',
  templateUrl: './view-qrcode.page.html',
  styleUrls: ['./view-qrcode.page.scss'],
})
export class ViewQRcodePage implements OnInit {
  data: string;

  values: Array<any> = [];
  constructor(public navParams: NavParams, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.data = JSON.stringify(this.navParams.get('data').val)
    this.values = JSON.parse(this.data)

  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
