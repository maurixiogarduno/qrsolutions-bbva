import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'Inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'Tienda', loadChildren: './tienda/tienda.module#TiendaPageModule' },
  { path: 'Scanner', loadChildren: './scanner/scanner.module#ScannerPageModule' },
  { path: 'Tarjetas', loadChildren: './tarjetas/tarjetas.module#TarjetasPageModule' },
  { path: 'Ventas', loadChildren: './ventas/ventas.module#VentasPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
