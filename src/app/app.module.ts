import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { QRCodeModule } from 'angularx-qrcode'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ViewQRcodePage } from './view-qrcode/view-qrcode.page';
import { ViewOrdersPage } from './view-orders/view-orders.page';

@NgModule({
  declarations: [AppComponent, ViewQRcodePage, ViewOrdersPage],
  entryComponents: [ViewQRcodePage, ViewOrdersPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    QRCodeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
