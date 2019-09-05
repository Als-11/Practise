import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewQRcodePage } from './view-qrcode.page';
import { QRCodeModule } from 'angularx-qrcode';

const routes: Routes = [
  {
    path: '',
    component: ViewQRcodePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewQRcodePage]
})
export class ViewQRcodePageModule { }
