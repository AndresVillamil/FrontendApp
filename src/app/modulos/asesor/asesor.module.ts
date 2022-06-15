import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { CrearSolicitudComponent } from './gestionar-solicitudes/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './gestionar-solicitudes/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './gestionar-solicitudes/eliminar-solicitud/eliminar-solicitud.component';
import { BuscarSolicitudComponent } from './gestionar-solicitudes/buscar-solicitud/buscar-solicitud.component';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { EliminarProductosComponent } from './productos/eliminar-productos/eliminar-productos.component';
import { BuscarProductosComponent } from './productos/buscar-productos/buscar-productos.component';
import { ContectenosComponent } from './gestionar-solicitudes/contectenos/contectenos.component';
import { CrearServicioComponent } from './servicios/crear-servicio/crear-servicio.component';
import { EditarServicioComponent } from './servicios/editar-servicio/editar-servicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';


@NgModule({
  declarations: [
    CrearSolicitudComponent,
    EditarSolicitudComponent,
    EliminarSolicitudComponent,
    BuscarSolicitudComponent,
    CrearProductosComponent,
    EditarProductosComponent,
    EliminarProductosComponent,
    BuscarProductosComponent,
    ContectenosComponent,
    CrearServicioComponent,
    EditarServicioComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ]
})
export class AsesorModule { }
