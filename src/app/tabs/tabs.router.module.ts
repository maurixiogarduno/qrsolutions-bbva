import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';

//Nuevas Páginas
import { InicioPage } from '../inicio/inicio.page';
import { TiendaPage } from '../tienda/tienda.page';
import { ScannerPage } from '../scanner/scanner.page';
import { TarjetasPage } from '../tarjetas/tarjetas.page';
import { VentasPage } from '../ventas/ventas.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(inicio:inicio)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      },
      {
        path: 'inicio',
        outlet: 'inicio',
        component: InicioPage
      },
      {
        path: 'tienda',
        outlet: 'tienda',
        component: TiendaPage
      },
      {
        path: 'scanner',
        outlet: 'scanner',
        component: ScannerPage
      },
      {
        path: 'tarjetas',
        outlet: 'tarjetas',
        component: TarjetasPage
      },
      {
        path: 'ventas',
        outlet: 'ventas',
        component: VentasPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(inicio:inicio)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
