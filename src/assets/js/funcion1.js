
    //llamado de los ids
    var formulario = document.getElementById("formulario");
var inputs = document.querySelectorAll("#formulario input");
    //expresiones regulares 
var expresiones = {
	nombre :  /^[a-zA-ZÀ-ÿ\s]{4,20}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    pregunta: /^[a-zA-Z0-9\_\-]{1,100}$/, // Letras, numeros, guion y guion_bajo
    asunto :  /^[a-zA-ZÀ-ÿ\s]{1,100}$/, // Letras y espacios, pueden llevar acentos.
}; 
var campos ={
    nombre : false,
    apellido : false,
    telefono : false,
    correo : false,
    asunto : false,
    pregunta : false
};
    
//funcion y switch para la validacion
var validarFormulario= (e) => {
    switch(e.target.name)
    {
        case "nombre":
           validarCampo(expresiones.nombre, e.target, "nombre")
        break;
        case "apellido":
            validarCampo(expresiones.nombre, e.target, "apellido")
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono")
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo")
        break;
        case "asunto":
            validarCampo(expresiones.asunto, e.target, "asunto")
        break;
        case "pregunta":
            validarCampo(expresiones.pregunta, e.target, "pregunta")
        break;
    }    
}

//funcion tipo flecha de validacion dependiendo de las respuestas
var validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
        document.getElementById("formulario_mensaje").classList.remove("formulario_mensaje-activo")
        campos[campo] = true;
	} else {
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
        campos[campo] = false;
	}
}

//generador de un ciclo por cada input
inputs.forEach((input) => {
    //escuchador de los inputs
   input.addEventListener("keyup", validarFormulario);
    //escuchador del mouse sobre un input 
    input.addEventListener("blur", validarFormulario);
});

    //escuchador del envio de formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    //condicion si todos los campos son true
    if(campos.nombre && campos.apellido && campos.telefono && campos.correo && campos.asunto && campos.pregunta){
        formulario.reset();
 //agregar una clase al mensaje de exito
        document.getElementById("formulario_mensaje-exito").classList.add("formulario_mensaje-exito-activo");
        //quitar el mensaje despues de un tiempo
        setTimeout(() =>{
            document.getElementById("formulario_mensaje-exito").classList.remove("formulario_mensaje-exito-activo"); 
        }, 2000);
        //quitar los iconos por cada input
        document.querySelectorAll(".formulario_grupo-correcto").forEach((icono) => {
            icono.classList.remove("formulario_grupo-correcto");
        });
    }
    //mensaje de error por no diligenciar bien el formulario
    else{
        document.getElementById("formulario_mensaje").classList.add("formulario_mensaje-activo");
    }
});