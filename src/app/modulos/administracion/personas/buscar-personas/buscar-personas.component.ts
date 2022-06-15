import { Component, OnInit } from '@angular/core';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-buscar-personas',
  templateUrl: './buscar-personas.component.html',
  styleUrls: ['./buscar-personas.component.css']
})
export class BuscarPersonasComponent implements OnInit {

  ListaPersonas:ModeloPersona[]=[];

  constructor(private servicioPersona: PersonaService) { }

  ngOnInit(): void {
    this.ObtenerListadoPersonas();
  }

  ObtenerListadoPersonas()
  {
    this.servicioPersona.ObtenerRegistros().subscribe((datos:ModeloPersona[])=>{
      this.ListaPersonas = datos;
    })
  }
}
