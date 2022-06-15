import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-personas',
  templateUrl: './editar-personas.component.html',
  styleUrls: ['./editar-personas.component.css']
})
export class EditarPersonasComponent implements OnInit {
  id: string = "";
  fgValidador : FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'nombrePersona': ['',[Validators.required]],
    'apellidoPersona': ['',[Validators.required]],
    'direccionPersona': ['',[Validators.required]],
    'celularPersona': ['',[Validators.required]],
    'correoPersona': ['',[Validators.required]]
    
  })

  //id:string="";
  constructor(private fb:FormBuilder,
    private servicioPersona:PersonaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    this.BuscarPersonas();
  }

  EditarPersona(){
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
    p.id = this.id;
    this.servicioPersona.EditarPersona(p).subscribe((datos:ModeloPersona)=>{
      alert("La persona se editó correctamente");
      this.router.navigate(["/administracion/buscarpersonas"])
    },(error:any)=>{
      alert("Error en la edición");
    }
    )
  }

  BuscarPersonas(){
    this.servicioPersona.ConsultaPersonasPorId(this.id).subscribe((datos:ModeloPersona)=>{
      this.fgValidador.controls['id'].setValue(this.id);
      this.fgValidador.controls['nombrePersona'].setValue(datos.nombres);
      this.fgValidador.controls['apellidoPersona'].setValue(datos.apellidos);
      this.fgValidador.controls['direccionPersona'].setValue(datos.direccion);
      this.fgValidador.controls['celularPersona'].setValue(datos.celular);
      this.fgValidador.controls['correoPersona'].setValue(datos.correo);
      
    },(error:any)=>{
      alert("La persona no existe!!");
    }
    )
  }

}
