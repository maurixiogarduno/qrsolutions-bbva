import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TiendaPage } from './tienda.page';

import { NgxQRCodeModule } from 'ngx-qrcode2'; //Crea Códigos QR
import { QRCodeModule } from 'angularx-qrcode'; //Crea QR Grande

const routes: Routes = [
  {
    path: '',
    component: TiendaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    QRCodeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TiendaPage]
})
export class TiendaPageModule {}
