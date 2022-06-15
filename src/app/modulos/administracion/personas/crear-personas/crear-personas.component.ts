import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-crear-personas',
  templateUrl: './crear-personas.component.html',
  styleUrls: ['./crear-personas.component.css']
})
export class CrearPersonasComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'nombrePersona': ['',[Validators.required]],
    'apellidoPersona': ['',[Validators.required]],
    'direccionPersona': ['',[Validators.required]],
    'celularPersona': ['',[Validators.required]],
    'correoPersona': ['',[Validators.required]],
  });


  constructor(private fb:FormBuilder,
    private servicioPersona:PersonaService,
    private router:Router) { }

  ngOnInit(): void {
  }

  GuardarPersona(){
    let nombrePersona = this.fgValidador.controls['nombrePersona'].value;
    let apellidoPersona = this.fgValidador.controls['apellidoPersona'].value;
    let direccionPersona = this.fgValidador.controls['direccionPersona'].value;
    let celularPersona = this.fgValidador.controls['celularPersona'].value;
    let correoPersona = this.fgValidador.controls['correoPersona'].value;
    let p = new ModeloPersona();
    p.nombres = nombrePersona;
    p.apellidos = apellidoPersona;
    p.direccion = direccionPersona;
    p.celular = celularPersona;
    p.correo = correoPersona;


    this.servicioPersona.CrearPersona(p).subscribe((datos:ModeloPersona) =>{
      alert("La persona fue creada correctamente!!")
      this.router.navigate(["/administracion/buscarpersonas"]);
    },(error:any)=>{
      alert("Error en el almacenamiento");
    }
    )
  }

}
