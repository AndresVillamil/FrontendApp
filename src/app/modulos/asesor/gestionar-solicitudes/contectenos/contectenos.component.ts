import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-contectenos',
  templateUrl: './contectenos.component.html',
  styleUrls: ['./contectenos.component.css']
})
export class ContectenosComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'recaptcha': ['', [Validators.required]]
  })

  siteKey:string ="";

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) {
      this.siteKey = "6LfIdYkdAAAAAMcAkkWI2zn7dU2r3V5frh2Zdfc-";
     }

  ngOnInit(): void {
  }

}
