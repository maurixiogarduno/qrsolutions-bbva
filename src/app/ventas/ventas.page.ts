import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {
  lugares: any = [
    {nombre: 'lugar 1', direccion: 'direccion 1', categoria: 'categoria 1'},
    {nombre: 'lugar 2', direccion: 'direccion 2', categoria: 'categoria 2'},
    {nombre: 'lugar 3', direccion: 'direccion 3', categoria: 'categoria 3'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
