import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerProductosComponent } from './catalogo/ver-productos/ver-productos.component';

import { EnviarSolicitudesComponent } from './enviar-solicitudes/enviar-solicitudes.component';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { VerificarSolicitudesComponent } from './verificar-solicitudes/verificar-solicitudes.component';

const routes: Routes = [
  {
    path: "enviarsolicitudes",
  component: EnviarSolicitudesComponent
  },
  {
    path: "verificarsolicitudes",
    component: VerificarSolicitudesComponent
  },
  {
    path: "realizarpedido",
    component: RealizarPedidoComponent
  },
  {
    path: "catalogo/verproductos",
    component: VerProductosComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
