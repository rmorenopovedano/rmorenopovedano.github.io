/**
 * Created by Raul on 07/03/2016.
 */
(function(){
    var contenidos, estados, cabeceras, codigo, tiempoInicial;
    document.addEventListener("DOMContentLoaded", function(){
        var recurso=document.getElementById('recurso');
        var enviar=document.getElementById('enviar');
        contenidos=document.getElementById('contenidos');
        estados=document.getElementById('estados');
        cabeceras=document.getElementById('cabeceras');
        codigo=document.getElementById('codigo');
        recurso.value=location.href;
        enviar.addEventListener('click', function(){
            cargaContenido(recurso.value, "GET", muestraContenido);
        })
    });
    var READY_STATE_UNINITIALIZED=0;
    var READY_STATE_LOADING=1;
    var READY_STATE_LOADED=2;
    var READY_STATE_INTERACTIVE=3;
    var READY_STATE_COMPLETE=4;
    var readyStates = ['UNINITIALIZED', 'LOADING', 'LOADED', 'INTERACTIVE', 'COMPLETE'];

    var peticion_http;
    function htmlEntities(str) {
        return decodeURI(encodeURI(str)
            .replace(/%0A/g, '<br/>')
            .replace(/%3C/g, '&lt;')
            .replace(/%3E/g, '&gt;'));
    }

    function cargaContenido(url, metodo) {
        peticion_http = new XMLHttpRequest();
        limpiar();
        tiempoInicial = new Date();
        if(peticion_http) {
            peticion_http.addEventListener("readystatechange", muestraContenido);
            peticion_http.open(metodo, url, true);
            peticion_http.send();
        }
    }

    function muestraContenido() {
        if(peticion_http.readyState == READY_STATE_COMPLETE) {
            if(peticion_http.status == 200) {
                contenidos.innerHTML=htmlEntities(peticion_http.responseText);
            }
            cabeceras.innerHTML=htmlEntities(peticion_http.getAllResponseHeaders());
            codigo.innerHTML=peticion_http.status+": "+peticion_http.statusText;
        }
        var tiempoFinal= new Date();
        var diferencia= tiempoFinal-tiempoInicial;
        estados.innerHTML+=readyStates[peticion_http.readyState]+" "+diferencia+" milisegundos<br>";
    }
    function limpiar(){
        estados.innerHTML="";
        contenidos.innerHTML="";
    }
})();