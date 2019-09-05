import { Component, OnInit } from '@angular/core';
import { ViewController } from '@ionic/core';
import { ModalController, NavParams } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ViewOrdersPage } from '../view-orders/view-orders.page';
import { ViewQRcodePage } from '../view-qrcode/view-qrcode.page';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.page.html',
  styleUrls: ['./orders-page.page.scss'],
})
export class OrdersPagePage implements OnInit {
  orders: Array<any> = []
  constructor(public modalCtrl: ModalController, public barcodeScanner: BarcodeScanner, public navParams: NavParams) { }

  ngOnInit() {
    // console.log()
    let ordObj = JSON.parse(localStorage.getItem('orders'))
    Object.keys(ordObj).map(x => {
      this.orders.push(ordObj[x])
    })
    console.log('orederssssssss', this.orders)
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  cardClicked(row, idx) {
    console.log('rowwww', row, 'idxxxx', idx)
    // this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, JSON.stringify(row)).then(res => {
    //   console.log('resss in enocde', res)
    // })
    this.viewQrcode(row);
  }

  scanCode() {
    this.barcodeScanner.scan({ showTorchButton: true, showFlipCameraButton: true }).then(res => {
      console.log('resss in scan', res)
      this.openViewOrders(res.text);
    })
  }

  async openViewOrders(value) {
    let modal = await this.modalCtrl.create({
      component: ViewOrdersPage,
      componentProps: {
        data: value
      }
    });
    return await modal.present();
  }

  async viewQrcode(value) {
    let modal = await this.modalCtrl.create({
      component: ViewQRcodePage,
      componentProps: {
        data: value
      }
    });
    return await modal.present();
  }

}
