import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificar',
  templateUrl: './identificar.component.html',
  styleUrls: ['./identificar.component.css']
})
export class IdentificarComponent implements OnInit {

  fgValidador : FormGroup = this.fb.group({
    'usuario': ['',[Validators.required, Validators.email]],
    'clave': ['',[Validators.required]],
    'recaptcha': ['',[Validators.required]]
  })

  siteKey:string ="";
  constructor(private fb: FormBuilder, 
    private servicioSeguridad: SeguridadService,
    private router: Router) { 
      this.siteKey = "6LfIdYkdAAAAAMcAkkWI2zn7dU2r3V5frh2Zdfc-";
    }

  ngOnInit(): void {
  }

  IdentificaUsuario(){
    let usuario = this.fgValidador.controls['usuario'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let claveCifrada = CryptoJS.MD5(clave).toString();

    this.servicioSeguridad.Identificar(usuario,claveCifrada).subscribe((datos:any)=>{
      //ok
      alert("Datos correctos")
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);
    },(error:any)=>{
      //ko
      alert("Datos invalidos")
    })
  }
}
