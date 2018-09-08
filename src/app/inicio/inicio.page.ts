import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { BarcodeScanner, BarcodeScannerOptions  } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  qrData = null;
  createdCode = "null";
  scannedCode = null;

  myAnimated : boolean;

  constructor(public actionSheetController: ActionSheetController,
              public alertController: AlertController,
              private barcodeScanner: BarcodeScanner,
              public loadingController: LoadingController) {
                this.myAnimated = false;
              }

  ngOnInit() {
  }

  //Animacion
  animatedOn(){
  this.myAnimated = true;
  }

  animatedOff(){
  this.myAnimated = false;
  }

  controlAnimated(){
    if (this.scannedCode == null){
      this.myAnimated = false;
    }
    else{
      this.myAnimated = true;
    }
  }

  //Loading
  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 300
    });
    return await loading.present();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'hide',
      duration: 5000,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  //Boton deposito
  async presentActionSheetDeposito() {
    const actionSheet = await this.actionSheetController.create({
      header: "Depósito",
      buttons: [{
        text: 'Tarjeta Débito BBVA',
        icon: 'ios-card',
        handler: () => {
          console.log('Delete clicked');
        },

      }, {
        text: 'Tarjeta Crédito BBVA',
        icon: 'ios-card',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Tarjeta Virtual BBVA',
        icon: 'ios-card',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Escanear QR',
        icon: 'ios-qr-scanner',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }



  //Boton retiro
  async presentActionSheetRetiro() {
    const actionSheet = await this.actionSheetController.create({
      header: "Depósito",
      buttons: [{
        text: 'Tarjeta Débito BBVA',
        icon: 'ios-card',
        handler: () => {
          alert("holas");
          console.log('Delete clicked');
        }
      }, {
        text: 'Tarjeta Crédito BBVA',
        icon: 'ios-card',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Tarjeta Virtual BBVA',
        icon: 'ios-card',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Generar QR',
        icon: 'ios-qr-scanner',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentAlert() {
   const alert = await this.alertController.create({
     header: 'Alert',
     subHeader: 'Subtitle',
     message: 'This is an alert message.',
     buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel')
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok')
          }
        }]
   });

   await alert.present();
 }

 //Crea un QR
 createCode() {
   this.createdCode = this.qrData;
 }

 //Escanea un QR
 scanCode() {
 this.presentLoading()
   this.barcodeScanner.scan().then(barcodeData => {
     this.scannedCode = barcodeData.text;
     this.myAnimated = true;
   }, (err) => {
       console.log('Error: ', err);
   });
 }


 //Recarga Vista
 recargaView(){
 location.reload();
}

}
