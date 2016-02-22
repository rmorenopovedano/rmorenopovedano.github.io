/**
 * Created by Raul on 09/02/2016.
 */
function validarNombre(nombre){
    if(nombre.value.trim()==""){
        errorNombre.innerHTML = "El campo no puede estar vacío";
    }else if(!/[\w]{4}/.test(nombre.value)){
        errorNombre.innerHTML = "Formato incorrecto. Debe contener al menos 4 letras.";
    }else{
        errorNombre.style.display = 'none';
        return true;
    }
    errorNombre.style.display = '';
    return false;
}
function validarApellidos(apellidos){
    if(apellidos.value.trim()=="") {
        errorApellidos.innerHTML = "El campo no puede estar vacío";
    }else{
        errorApellidos.style.display = 'none';
        return true;
    }
    errorApellidos.style.display = '';
    return false;
}
function validarDni(dni){
    if(!(/^[\d]{8}[a-zA-Z]$/).test(dni.value)){
        errorDni.innerHTML="Formato incorrecto. Ejemplo: 12345678z";
    }
    else if(dni.value.trim()==""){
        errorDni.innerHTML="El campo no puede estar vacío";
    }
    else{
        errorDni.style.display="none";
        return true;
    }
    errorDni.style.display = '';
    return false;
}

function validarAceptar(aceptar){
    if(!aceptar.checked){
        errorAceptar.innerHTML="Debes aceptar las condiciones";
        errorAceptar.style.display="";
        return false;
    }
    else{
        errorAceptar.style.display="none";
        return true;
    }
}

function validarFormulario(){
    var validacion = true;
    if(!validarAceptar(aceptar)){
        validacion = false;
    }
    if(!validarDni(dni)){
        validacion = false;
    }
    if(!validarApellidos(apellidos)){
        validacion = false;
    }
    if(!validarNombre(nombre)){
        validacion = false;
    }
    return validacion;
}