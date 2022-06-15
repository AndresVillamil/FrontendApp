import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProducto } from '../modelos/producto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
url ='http://localhost:3000';
token: String ="";
  constructor(private http: HttpClient,
    private servicioSeguridad: SeguridadService) {
      this.token= this.servicioSeguridad.ObtnerToken();
     }

  // Se crean las cuatro operaciones básicas del CRUD
  //1.Una lista de tipo ModeloProducto
  ObtenerRegistros():Observable<ModeloProducto[]>{
    return this.http.get<ModeloProducto[]>(`${this.url}/productos`);

  }

  //5. Se obtiene el porducto por ID
  ObtenerRegistrosPorId(id: string):Observable<ModeloProducto>{
    return this.http.get<ModeloProducto>(`${this.url}/productos/${id}`);
  }

  //2. Crear productos, en este caso se requiere validar el token
  //Se envia por metodo post los datos a la url indicada
  CrearProducto(producto:ModeloProducto):Observable<ModeloProducto>{
    return this.http.post<ModeloProducto>(`${this.url}/productos`,producto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

   //3. Editar los productos, en este caso se requiere validar el token
  //Se envia por metodo put los datos a la url indicada
  ActualizarProducto(producto:ModeloProducto):Observable<ModeloProducto>{
    return this.http.put<ModeloProducto>(`${this.url}/productos/${producto.id}`,producto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

   //4. Eliminar  productos por Id , en este caso se requiere validar el token y recibir un id
  //Se envia por metodo delete los datos a la url indicada
  EliminarProducto(id: string):Observable<any>{
    return this.http.delete<ModeloProducto>(`${this.url}/productos/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

}
