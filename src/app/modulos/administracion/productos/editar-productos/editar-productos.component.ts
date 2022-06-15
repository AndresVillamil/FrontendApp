import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {
    id: string = "";
   //Validaciones para el formulario
   fgValidador: FormGroup =this.fb.group({
    'id': ['',[Validators.required]],
    'nombreProducto': ['',[Validators.required]],
    'descripcionProducto': ['',[Validators.required]],
    'imagen': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
    'existencia': ['',[Validators.required]],
    'categoria': ['',[Validators.required]]

  })
constructor(private fb : FormBuilder,
  private productoServicio: ProductoService,
  private router: Router,
  private route: ActivatedRoute) { }

ngOnInit(): void {
  this.id = this.route.snapshot.params["id"];
  this.BuscarProducto();
}

//Realiza primero la búsqueda y settea las propiedades a los campos del formulario
BuscarProducto(){
  this.productoServicio.ObtenerRegistrosPorId(this.id).subscribe((datos:ModeloProducto)=>{
    this.fgValidador.controls['id'].setValue(this.id);
    this.fgValidador.controls['nombreProducto'].setValue(datos.nombreProducto);
    this.fgValidador.controls['descripcionProducto'].setValue(datos.descripcionProducto);
    this.fgValidador.controls['imagen'].setValue(datos.imagen);
    this.fgValidador.controls['precio'].setValue(datos.precio);
    this.fgValidador.controls['existencia'].setValue(datos.existencia);
    this.fgValidador.controls['categoria'].setValue(datos.idCategoria);
  },(error:any)=>{
    alert("El producto no existe")
  })
}
//Método para almacenar la información
EditarProducto(){
  let nombreProducto = this.fgValidador.controls['nombreProducto'].value;
  let descripcionProducto = this.fgValidador.controls['descripcionProducto'].value;
  let imagen = this.fgValidador.controls['imagen'].value;
  let precio = parseInt(this.fgValidador.controls['precio'].value);
  let existencia = this.fgValidador.controls['existencia'].value;
  let idcategoria = this.fgValidador.controls['categoria'].value;
  let p = new ModeloProducto();
  p.nombreProducto = nombreProducto;
  p.descripcionProducto = descripcionProducto;
  p.imagen = imagen;
  p.precio = precio;
  p.existencia = existencia;
  p.idCategoria = idcategoria;
  p.id = this.id;

  this.productoServicio.ActualizarProducto(p).subscribe((datos: ModeloProducto)=>{
    alert("Producto actualizado correctamente");
    this.router.navigate(["/administracion/buscarproductos"]);
  },(error: any)=>{
    alert("Error actualizando producto")
  })
}

}
