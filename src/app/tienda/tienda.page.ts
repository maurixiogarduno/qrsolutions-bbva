import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {
  //Variables para JSON Model:

  jsonAmount = "0";

  //JSON Model:
  jsonModel = {
    "ot":"0001",
    "dOp":[
      {"alias": ""},
      {"cl": "012180004585820842"},
      {"type": "CL"},
      {"refn": ""},
      {"refa": "MAURICIO"},
      {"amount": this.jsonAmount},
      {"bank": "00012"},
      {"country": "MX"},
      {"currency": "MXN"}
    ]
  };

  //CONVERCION DE JSON A STRING:
  jsonLayout = JSON.stringify(this.jsonModel);


  qrData = "0"; // El QR que se genera
  createdCode = "0"; // El pago que se genera

  qrURL = this.jsonLayout;  // URL DEL QR
  qrCode = this.qrURL; // Layout Final Del QR

  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {
  }

  //Funcion que recar el QR generado
  createCode() {
    this.createdCode = this.qrData;
  }

  //Funcion para escanear un codigo de barras
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.createdCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }





  //Control de Págo
  oneButton(){
  if (this.qrData.length > 4){
    this.createdCode = this.qrData.slice(0,5);
    //Actualiza el QR con amount
    this.jsonModel = {
      "ot":"0001",
      "dOp":[
        {"alias": ""},
        {"cl": "012180004585820842"},
        {"type": "CL"},
        {"refn": ""},
        {"refa": "MAURICIO"},
        {"amount": this.createdCode},
        {"bank": "00012"},
        {"country": "MX"},
        {"currency": "MXN"}
      ]
    };
    this.jsonLayout = JSON.stringify(this.jsonModel);
    this.qrCode = this.jsonLayout;
  }
  else{
    if (this.qrData == "0"){
      this.qrData = "1"
      this.createdCode = this.qrData;
      // this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo

      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
    else{
      this.qrData = this.qrData + "1"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
  }
  }

  twoButton(){
  if (this.qrData.length > 4){
    this.createdCode = this.qrData.slice(0,5);
    //Actualiza el QR con amount
    this.jsonModel = {
      "ot":"0001",
      "dOp":[
        {"alias": ""},
        {"cl": "012180004585820842"},
        {"type": "CL"},
        {"refn": ""},
        {"refa": "MAURICIO"},
        {"amount": this.createdCode},
        {"bank": "00012"},
        {"country": "MX"},
        {"currency": "MXN"}
      ]
    };
    this.jsonLayout = JSON.stringify(this.jsonModel);
    this.qrCode = this.jsonLayout;
  }
  else{
    if (this.qrData == "0"){
      this.qrData = "2"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
    else{
      this.qrData = this.qrData + "2"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
  }
  }

  threeButton(){
  if (this.qrData.length > 4){
    this.createdCode = this.qrData.slice(0,5);
    //Actualiza el QR con amount
    this.jsonModel = {
      "ot":"0001",
      "dOp":[
        {"alias": ""},
        {"cl": "012180004585820842"},
        {"type": "CL"},
        {"refn": ""},
        {"refa": "MAURICIO"},
        {"amount": this.createdCode},
        {"bank": "00012"},
        {"country": "MX"},
        {"currency": "MXN"}
      ]
    };
    this.jsonLayout = JSON.stringify(this.jsonModel);
    this.qrCode = this.jsonLayout;
  }
  else{
    if (this.qrData == "0"){
      this.qrData = "3"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
    else{
      this.qrData = this.qrData + "3"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
  }
  }

  fourButton(){
  if (this.qrData.length > 4){
    this.createdCode = this.qrData.slice(0,5);
    //Actualiza el QR con amount
    this.jsonModel = {
      "ot":"0001",
      "dOp":[
        {"alias": ""},
        {"cl": "012180004585820842"},
        {"type": "CL"},
        {"refn": ""},
        {"refa": "MAURICIO"},
        {"amount": this.createdCode},
        {"bank": "00012"},
        {"country": "MX"},
        {"currency": "MXN"}
      ]
    };
    this.jsonLayout = JSON.stringify(this.jsonModel);
    this.qrCode = this.jsonLayout;
  }
  else{
    if (this.qrData == "0"){
      this.qrData = "4"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
    else{
      this.qrData = this.qrData + "4"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
  }
  }

  fiveButton(){
  if (this.qrData.length > 4){
    this.createdCode = this.qrData.slice(0,5);
    //Actualiza el QR con amount
    this.jsonModel = {
      "ot":"0001",
      "dOp":[
        {"alias": ""},
        {"cl": "012180004585820842"},
        {"type": "CL"},
        {"refn": ""},
        {"refa": "MAURICIO"},
        {"amount": this.createdCode},
        {"bank": "00012"},
        {"country": "MX"},
        {"currency": "MXN"}
      ]
    };
    this.jsonLayout = JSON.stringify(this.jsonModel);
    this.qrCode = this.jsonLayout;
  }
  else{
    if (this.qrData == "0"){
      this.qrData = "5"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
    else{
      this.qrData = this.qrData + "5"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
  }
  }

  sixButton(){
  if (this.qrData.length > 4){
    this.createdCode = this.qrData.slice(0,5);
    //Actualiza el QR con amount
    this.jsonModel = {
      "ot":"0001",
      "dOp":[
        {"alias": ""},
        {"cl": "012180004585820842"},
        {"type": "CL"},
        {"refn": ""},
        {"refa": "MAURICIO"},
        {"amount": this.createdCode},
        {"bank": "00012"},
        {"country": "MX"},
        {"currency": "MXN"}
      ]
    };
    this.jsonLayout = JSON.stringify(this.jsonModel);
    this.qrCode = this.jsonLayout;
  }
  else{
    if (this.qrData == "0"){
      this.qrData = "6"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
    else{
      this.qrData = this.qrData + "6"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
  }
  }

  sevenButton(){
  if (this.qrData.length > 4){
    this.createdCode = this.qrData.slice(0,5);
    //Actualiza el QR con amount
    this.jsonModel = {
      "ot":"0001",
      "dOp":[
        {"alias": ""},
        {"cl": "012180004585820842"},
        {"type": "CL"},
        {"refn": ""},
        {"refa": "MAURICIO"},
        {"amount": this.createdCode},
        {"bank": "00012"},
        {"country": "MX"},
        {"currency": "MXN"}
      ]
    };
    this.jsonLayout = JSON.stringify(this.jsonModel);
    this.qrCode = this.jsonLayout;
  }
  else{
    if (this.qrData == "0"){
      this.qrData = "7"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
    else{
      this.qrData = this.qrData + "7"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
  }
  }

  eightButton(){
  if (this.qrData.length > 4){
    this.createdCode = this.qrData.slice(0,5);
    //Actualiza el QR con amount
    this.jsonModel = {
      "ot":"0001",
      "dOp":[
        {"alias": ""},
        {"cl": "012180004585820842"},
        {"type": "CL"},
        {"refn": ""},
        {"refa": "MAURICIO"},
        {"amount": this.createdCode},
        {"bank": "00012"},
        {"country": "MX"},
        {"currency": "MXN"}
      ]
    };
    this.jsonLayout = JSON.stringify(this.jsonModel);
    this.qrCode = this.jsonLayout;
  }
  else{
    if (this.qrData == "0"){
      this.qrData = "8"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
    else{
      this.qrData = this.qrData + "8"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
  }
  }

  nineButton(){
  if (this.qrData.length > 4){
    this.createdCode = this.qrData.slice(0,5);
    //Actualiza el QR con amount
    this.jsonModel = {
      "ot":"0001",
      "dOp":[
        {"alias": ""},
        {"cl": "012180004585820842"},
        {"type": "CL"},
        {"refn": ""},
        {"refa": "MAURICIO"},
        {"amount": this.createdCode},
        {"bank": "00012"},
        {"country": "MX"},
        {"currency": "MXN"}
      ]
    };
    this.jsonLayout = JSON.stringify(this.jsonModel);
    this.qrCode = this.jsonLayout;
  }
  else{
    if (this.qrData == "0"){
      this.qrData = "9"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
    else{
      this.qrData = this.qrData + "9"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
  }
  }

  zeroButton(){
  if (this.qrData.length > 4){
    this.createdCode = this.qrData.slice(0,5);
    //Actualiza el QR con amount
    this.jsonModel = {
      "ot":"0001",
      "dOp":[
        {"alias": ""},
        {"cl": "012180004585820842"},
        {"type": "CL"},
        {"refn": ""},
        {"refa": "MAURICIO"},
        {"amount": this.createdCode},
        {"bank": "00012"},
        {"country": "MX"},
        {"currency": "MXN"}
      ]
    };
    this.jsonLayout = JSON.stringify(this.jsonModel);
    this.qrCode = this.jsonLayout;
  }
  else{
    if (this.qrData == "0"){
      this.qrData = "0"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
    else{
      this.qrData = this.qrData + "0"
      this.createdCode = this.qrData;
      //Actualiza el QR con amount
      this.jsonModel = {
        "ot":"0001",
        "dOp":[
          {"alias": ""},
          {"cl": "012180004585820842"},
          {"type": "CL"},
          {"refn": ""},
          {"refa": "MAURICIO"},
          {"amount": this.createdCode},
          {"bank": "00012"},
          {"country": "MX"},
          {"currency": "MXN"}
        ]
      };
      this.jsonLayout = JSON.stringify(this.jsonModel);
      this.qrCode = this.jsonLayout;
    }
  }
  }

  cleanButton(){
    this.qrData = "0"
    this.createdCode = this.qrData;
    //Actualiza el QR con amount
    this.jsonModel = {
      "ot":"0001",
      "dOp":[
        {"alias": ""},
        {"cl": "012180004585820842"},
        {"type": "CL"},
        {"refn": ""},
        {"refa": "MAURICIO"},
        {"amount": this.createdCode},
        {"bank": "00012"},
        {"country": "MX"},
        {"currency": "MXN"}
      ]
    };
    this.jsonLayout = JSON.stringify(this.jsonModel);
    this.qrCode = this.jsonLayout;
  }
  //Fin del control de pago
}
