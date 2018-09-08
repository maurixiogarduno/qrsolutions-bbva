import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'; //Ecanea QR y Barcode
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx'; //Escanea QR en Web
import { NgxQRCodeModule } from 'ngx-qrcode2'; //Generar QR
import { QRCodeModule } from 'angularx-qrcode'; //Genera QR


//Importa Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBZJahCp6jr0OpJYJVMgG-Kf3kKoZXhMf4",
  authDomain: "qrsolutions-bbva.firebaseapp.com",
  databaseURL: "https://qrsolutions-bbva.firebaseio.com",
  projectId: "qrsolutions-bbva",
  storageBucket: "qrsolutions-bbva.appspot.com",
  messagingSenderId: "553571038518"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [QRCodeModule, NgxQRCodeModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFireDatabaseModule, AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
