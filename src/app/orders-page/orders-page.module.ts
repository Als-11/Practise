import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrdersPagePage } from './orders-page.page';
import { ViewOrdersPage } from '../view-orders/view-orders.page';
import { ViewQRcodePage } from '../view-qrcode/view-qrcode.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersPagePage
  }
];

@NgModule({
  entryComponents: [ViewOrdersPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrdersPagePage, ViewOrdersPage]
})
export class OrdersPagePageModule { }
