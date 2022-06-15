import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPersona } from '../modelos/persona.modelo';
import { SeguridadService } from './seguridad.service';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  token:string="";
  constructor(private http:HttpClient,
    private servicioSeguridad: SeguridadService) {
      this.token = this.servicioSeguridad.ObtnerToken();
     }

  ObtenerRegistros():Observable<ModeloPersona[]>{
    //return this.http.get<ModeloPersona[]>("http://localhost:3000/personas");    
    return this.http.get<ModeloPersona[]>("http://localhost:3000/usuarios");    
  }

  ConsultaPersonasPorId(id:string) : Observable<ModeloPersona>{
    return this.http.get<ModeloPersona>(`http://localhost:3000/usuarios/${id}`);
  }

  CrearPersona(persona : ModeloPersona):Observable<ModeloPersona>{
    //return this.http.post("http://localhost:3000/personas",persona,{
      return this.http.post<ModeloPersona>("http://localhost:3000/usuarios",persona,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  EditarPersona(persona : ModeloPersona):Observable<ModeloPersona>{
    //return this.http.put<ModeloPersona>("http://localhost:3000/personas",persona,{
      return this.http.put<ModeloPersona>(`http://localhost:3000/usuarios/${persona.id}`,persona,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  EliminarPersona(id : string):Observable<any>{
    //return this.http.delete<ModeloPersona>("http://localhost:3000/personas",{
      return this.http.delete<ModeloPersona>(`http://localhost:3000/usuarios/${id}`,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }


}
