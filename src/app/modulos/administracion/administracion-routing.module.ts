import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { GestionConfiguracionComponent } from './configuracion/gestion-configuracion/gestion-configuracion.component';
import { BuscarPersonasComponent } from './personas/buscar-personas/buscar-personas.component';
import { CrearPersonasComponent } from './personas/crear-personas/crear-personas.component';
import { EditarPersonasComponent } from './personas/editar-personas/editar-personas.component';
import { EliminarPersonasComponent } from './personas/eliminar-personas/eliminar-personas.component';
import { BuscarProductosComponent } from './productos/buscar-productos/buscar-productos.component';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { EliminarProductosComponent } from './productos/eliminar-productos/eliminar-productos.component';

const routes: Routes = [
  {
    path: "buscarpersonas",
    component : BuscarPersonasComponent
  },
  {
    path: "crearpersonas",
    component : CrearPersonasComponent
  },
  {
    path: "editarpersonas/:id",
    component : EditarPersonasComponent
  },  
  {
    path: "eliminarpersonas/:id",
    component : EliminarPersonasComponent
  },
  {
    path: "buscarproductos",
    component : BuscarProductosComponent
  },
  {
    path: "crearproductos",
    component : CrearProductosComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editarproductos/:id",
    component : EditarProductosComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "eliminarproductos/:id",
    component : EliminarProductosComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "gestionconfiguracion",
    component: GestionConfiguracionComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
