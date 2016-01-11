/**
 * Created by Raul on 16/12/2015.
 */
function validarNombre(nombre) {
    if (nombre.value == null || nombre.value== "" || /^\s+$/.test(nombre.value)){
        nombre.focus();
        return false;
    }
    else return true;
}

function validarApellido(apellido){
    if (apellido.value == null || apellido.value == "" || /^\s+$/.test(apellido.value)){
        apellido.focus();
        return false;
    }
    else return true;
}
function validarFecha(fecha){
    var arrayFecha=fecha.value.split("/");
    var dia=arrayFecha[0];

    var mes=arrayFecha[1];

    var anno=arrayFecha[2];

    if(validarAnno(anno)){
        if(validarDia(dia,mes, anno)){
            return true;
        }
        else {
            fecha.focus();
            return false;
        }
    }else{
        fecha.focus();
        return false;
    }
}
function validarDia(dia, mes, anno){
    if(mes==2){
        if(esBisiesto(anno)){
            if(dia>=1 && dia<=29)
                return true;
            else
                return false;
        }else {
            if (dia>=1 && dia<=28) {
                return true;
            }else
                return false;
        }
    }
    else if (mes==4 || mes==6 || mes==9 || mes==11){
        if(dia>=1 && dia<=30)
            return true;
        else {
            return false;
        }
    }else if(mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
        if(dia>=1 && dia<=31)
            return true;
        else {
            return false;
        }
    }else{
        return false;
    }
}
function validarAnno(anno){
    var fechaActual=new Date();
    var annoActual=fechaActual.getFullYear();
    if(!anno){
        return false;
    }else if(anno>1970 && anno<annoActual){
        return true;
    }else{
        return false;
    }
}
function esBisiesto(year){
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true : false;
}
function validarEmail(email){
    if( !(/[\w._-]*@[\w]+[.]+[\w]+/.test(email.value)) ){
        email.focus();
        return false;
    }
    else return true;
}
function validarDNI(dni){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if( !(/^\d{8}[A-Z]$/.test(dni.value)) ) {
        dni.focus();
        return false;
    }
    else if(dni.value.charAt(8) != letras[(dni.value.substring(0, 8))%23]) {
        dni.focus();
        return false;
    }else return true;
}
function validarTelefono(numero){
    if( !(/^\d{9}$/.test(numero.value)) ) {
        numero.focus();
        return false;
    }
    else return true;
}
function validarCuenta(NumCuenta){
    if(!(/^\d{4}-\d{4}-\d{2}-\d{9}$/.test(NumCuenta.value))){
        NumCuenta.focus();
        return false;
    }

    else return true;
}
function validarUrl(url){
    if(!(/^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi.test(url.value))){
        url.focus();
        return false;
    }

    else return true;
}
function validarTitulacion(titulaciones){
    for(var i=0; i<titulaciones.length; i++) {
        if(titulaciones[i].checked) {

            return true;
        }
    }
    alert("titulaciones");
    return false;
}
function validarIdiomas(idioma) {
    for (var i = 0; i < idioma.length; i++) {
        if (idioma[i].checked) {
            return true;
        }
    }
    return false;
}
function validarFormulario(){
    if(validarNombre(nombre) && validarApellido(apellido1) && validarApellido(apellido2) && validarFecha(fecha)
        && validarEmail(email)&& validarDNI(dni)&& validarTelefono(telefono) &&
        validarCuenta(cuenta) && validarUrl(url)){
        return true;
    }else return false;
}