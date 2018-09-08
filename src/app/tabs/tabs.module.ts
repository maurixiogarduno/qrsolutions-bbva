import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';

//Nuevas Páginas
import { InicioPageModule } from '../inicio/inicio.module';
import { TiendaPageModule } from '../tienda/tienda.module';
import { ScannerPageModule } from '../scanner/scanner.module';
import { TarjetasPageModule } from '../tarjetas/tarjetas.module';
import { VentasPageModule } from '../ventas/ventas.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    InicioPageModule, //Página Inicio
    TiendaPageModule, //Página Tienda
    ScannerPageModule, //Página Scanner
    TarjetasPageModule, //Página Tarjetas
    VentasPageModule //Página Ventas
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
