import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
//Revisar comportamiento de una varaible específica
//Se inicializa en vacío y evalua la propiedad
datosUsuarioEnSasion = new BehaviorSubject <ModeloIdentificar> (new ModeloIdentificar());

  constructor(private http: HttpClient) { 
    this.VerificarSesionActual();

  }

  //Incluir metodos de identificaro y otros

   //1. Identificar al usuario con el método post a la url del Backend - metodo identificarPersona
  Identificar(usuario:string, clave:string ):Observable<ModeloIdentificar>{
    return this.http.post("http://localhost:3000/identificarUsuario",{
      usuario:usuario,
      clave:clave
    },{
      headers: new HttpHeaders({

      })
    })
  }


 //6. Se debe verificar el estado acual de la sesión
 VerificarSesionActual(){
  //Validar si hay datos en el navegador
  let datos = this.ObtenerInformacionSesion();
  //Llenar los datos (Variable de comportamiento)
  if(datos){
    this.RefrescarDatosSesion(datos);
  }
}

//7. Parseo a Observable
ObtenerDatosUsuarioEnSesion(){
 return this.datosUsuarioEnSasion.asObservable();
}

//8. Refrescara la información de sesión al ingresar al link de Cerrar Sesión
RefrescarDatosSesion(datos: ModeloIdentificar){
  this.datosUsuarioEnSasion.next(datos);
}

//LocalStorage memoria del navegador
 //2. Almacenar los datos de la sesión con setItem, como vienen den JSON se convierten a String
 AlmacenarSesion(datos: ModeloIdentificar){
  datos.estaIdentificado = true;
  let datosString = JSON.stringify(datos);
  localStorage.setItem("datosSesion", datosString);
  this.RefrescarDatosSesion(datos);
}

//3.Obtener información de la sesión con getItem, para acceder a los datos de la sesión
ObtenerInformacionSesion(){
  let datosString = localStorage.getItem("datosSesion");
  if(datosString){
    //convertir String a JSON
    let datos = JSON.parse(datosString);
    return datos;
  }else{
    return null;
  }
}

//4. Para cerrar sesión, eliminar lod datos de la sesión del localStorage con removeItem
EliminarInformacionSesion(){
  localStorage.removeItem("datosSesion");
  this.RefrescarDatosSesion(new ModeloIdentificar())

}

//5. Métodos para validar inicio de sesión
SeHaIniciadoSesion(){
 let datosString = localStorage.getItem("datosSesion");
 return datosString
}

//Revisa el LocalStorage y recupera el token
ObtnerToken(){
  let datosString = localStorage.getItem("datosSesion");
  if (datosString){
    let datos = JSON.parse(datosString);
    return datos.tk;
  }else{
    return "";
  }
}

}
