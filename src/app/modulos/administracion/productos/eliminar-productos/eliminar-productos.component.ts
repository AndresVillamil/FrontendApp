import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-eliminar-productos',
  templateUrl: './eliminar-productos.component.html',
  styleUrls: ['./eliminar-productos.component.css']
})
export class EliminarProductosComponent implements OnInit {

    id: string = "";
  constructor(private productoServicio: ProductoService,
    private router: Router,
    private route: ActivatedRoute) { 
      this.id = this.route.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.EliminarProducto();
  }

  EliminarProducto(){
    this.productoServicio.EliminarProducto(this.id).subscribe((datos:any)=>{
      alert("Producto eliminado correctamente");
      this.router.navigate(["/administracion/buscarproductos"]);
    },(error: any)=>{
      alert("No se pudo eliminar el producto");
    })
  }
}
