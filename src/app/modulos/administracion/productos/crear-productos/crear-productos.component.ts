import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {
    //Validaciones para el formulario
    fgValidador: FormGroup =this.fb.group({
      'nombreProducto': ['',[Validators.required]],
      'descripcionProducto': ['',[Validators.required]],
      'imagen': ['',[Validators.required]],
      'precio': ['',[Validators.required]],
      'existencia': ['',[Validators.required]],
      'categoria': ['',[Validators.required]]

    })
  constructor(private fb : FormBuilder,
    private productoServicio: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  //Método para almacenar la información
  GuardarProducto(){
    let nombreProducto = this.fgValidador.controls['nombreProducto'].value;
    let descripcionProducto = this.fgValidador.controls['descripcionProducto'].value;
    let imagen = this.fgValidador.controls['imagen'].value;
    let precio = parseInt(this.fgValidador.controls['precio'].value);
    let existencia = parseInt(this.fgValidador.controls['existencia'].value);
    let categoria = this.fgValidador.controls['categoria'].value;
    let p = new ModeloProducto();
    p.nombreProducto = nombreProducto;
    p.descripcionProducto = descripcionProducto;
    p.imagen = imagen;
    p.precio = precio;
    p.existencia = existencia;
    p.idCategoria = categoria;

    this.productoServicio.CrearProducto(p).subscribe((datos: ModeloProducto)=>{
      alert("Producto almacenado correctamente");
      this.router.navigate(["/administracion/buscarproductos"]);
    },(error: any)=>{
      alert("Error almacenando producto")
      alert(p.precio)
    })
  }
}
