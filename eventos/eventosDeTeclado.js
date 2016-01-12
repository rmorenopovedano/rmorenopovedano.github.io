/**
 * Created by Raul on 12/01/2016.
 * Mediante el registro de eventos recomendado por la W3C, entrega una página donde muestres información referente a todos los eventos del Ratón.
 Puede serte útil la siguiente páginas de librosWeb: introducción a JavaScript e introduccción a Ajax

 Recuerda comprobarlo en los tres navegadores principales.
 */
function muestraInformacion(elEvento) {
    var evento = window.event || elEvento;
    if(evento.altKey) {
        alert('Estaba pulsada la tecla ALT');
    }
    var mensaje = "Tipo de evento: " + evento.type + "<br>" +
        "Propiedad keyCode: " + evento.keyCode + "<br>" +
        "Propiedad charCode: " + evento.charCode + "<br>" +
        "Carácter pulsado: " + String.fromCharCode(evento.charCode);

    info.innerHTML += "<br>--------------------------------------<br>" + mensaje;
}
window.addEventListener("load",function(){
    document.onkeyup = muestraInformacion;
    document.onkeypress = muestraInformacion;
    document.onkeydown = muestraInformacion;
});
