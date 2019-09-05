import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'orders-page', loadChildren: './orders-page/orders-page.module#OrdersPagePageModule' },
  { path: 'view-orders', loadChildren: './view-orders/view-orders.module#ViewOrdersPageModule' },
  { path: 'view-qrcode', loadChildren: './view-qrcode/view-qrcode.module#ViewQRcodePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
