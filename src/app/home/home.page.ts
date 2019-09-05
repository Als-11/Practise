import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';
import { OrdersPagePage } from '../orders-page/orders-page.page';
import { HttpClient } from '@angular/common/http';
import * as PouchDB from 'pouchdb'
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  encodedData: any;
  orders: Array<any> = ['dfs', 'fdsdf', 'fsdfs', 'fdsfsdfs']
  orderForm: FormGroup = new FormGroup({
    'p1': new FormControl(),
    'p2': new FormControl(),
    'p3': new FormControl(),
    'p4': new FormControl()
  })

  constructor(public alertCtrl: AlertController, public barcodeScanner: BarcodeScanner, public modalCtrl: ModalController, public http: HttpClient) {
    localStorage.clear();
    localStorage.setItem('orders', '{}')

  }

  ngOnInit() {

  }


  submitForm() {
    let fg = this.orderForm;
    let values = [];
    let date = new Date();
    let orderId = date.getFullYear().toString() + date.getMonth() + date.getDate() + date.getTime();
    Object.keys(fg.value).map(x => {
      values.push(fg.value[x])
    })
    let req = {};
    req['orderId'] = orderId;
    req['timeStamp'] = moment().format('DD-MM-YYYY');
    req['val'] = values;
    let prevOrders = {};
    prevOrders = JSON.parse(localStorage.getItem('orders'));
    prevOrders[orderId] = req;
    localStorage.setItem('orders', JSON.stringify(prevOrders));
    this.openAlert();
  }

  async openAlert() {
    let alert = await this.alertCtrl.create({
      header: 'Success', message: 'Your order was submitted successfully',
      buttons: [{
        text: 'Ok',
        role: 'cancel',
        handler: () => {
          this.orderForm.reset();
        }
      }]
    })
    alert.present();
  }

  createCode() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, "Jai Sri Ram").then(res => {
      console.log('resssss', res)
      this.encodedData = res;
    }, err => {
      console.log('eerrrrrrrr', err)
    })
  }

  async previousOrders() {
    let modal = await this.modalCtrl.create({
      component: OrdersPagePage
    });
    return await modal.present();
  }

}
