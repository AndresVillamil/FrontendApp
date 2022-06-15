import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarSolicitudComponent } from './gestionar-solicitudes/buscar-solicitud/buscar-solicitud.component';
import { ContectenosComponent } from './gestionar-solicitudes/contectenos/contectenos.component';
import { CrearSolicitudComponent } from './gestionar-solicitudes/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './gestionar-solicitudes/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './gestionar-solicitudes/eliminar-solicitud/eliminar-solicitud.component';
import { CrearServicioComponent } from './servicios/crear-servicio/crear-servicio.component';

const routes: Routes = [
  {
    path: 'gestionar-solicitudes/contactenos',
    component: ContectenosComponent
  },
  {
    path: 'gestionar-solicitudes/buscarsolicitud',
    component: BuscarSolicitudComponent
  },
  {
    path: 'gestionar-solicitudes/crearsolicitud',
    component: CrearSolicitudComponent
  },
  {
    path: 'gestionar-solicitudes/editarsolicitud',
    component: EditarSolicitudComponent
  },
  {
    path: 'gestionar-solicitudes/eliminarsolicitud',
    component: EliminarSolicitudComponent
  },
  {
    path: 'servicios/crearservicio',
    component: CrearServicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
