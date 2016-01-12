/**
 * Created by Raul on 15/12/2015.
 * Formulario completito
 Crea un formulario con todos los tipos de controles y realiza todas las validaciones posibles mediante JavaScript.
 Utiliza el modelo de registro avanzado de eventos según W3C (addEventListener), así como las expresiones regulares.
 Asegúrate de validar lo siguiente:
 Obligatoriedad (campo de texto, opción seleccionada (checkbox, radio button y selección)
 Tipo de dato introducido (numérico...)
 Dirección de correo válida
 Número de DNI válido
 Fecha válida
 Número de teléfono
 Número de cuenta corriente
 URL
 Asegúrate de que:
 Al perder el foco de cada control se comprueba su validación.
 Los errores los muestras mediante css.
 Al enviar el formulario se realizan TODAS LAS VALIDACIONES, yéndose el foco al primer error.
 Procura aislar las validaciones del interfaz del usuario (arquitectura de tres capas)
 */

window.addEventListener("load", function() {
    var nombre, apellido1,apellido2,fecha,ciudad,email, dni, telefono, cuenta,url;
    nombre=document.getElementById('nombre');
    apellido1=document.getElementById('apellido1');
    apellido2=document.getElementById('apellido2');
    fecha=document.getElementById('fecha');
    email=document.getElementById('email');
    dni=document.getElementById('dni');
    telefono=document.getElementById('telefono');
    cuenta=document.getElementById('cuenta');
    url=document.getElementById('url');
    nombre.focus();
    nombre.addEventListener('blur',function(){
        if(!validarNombre(nombre)){
            nombre.style.border="2px solid red";
        }else
            nombre.style.border="2px solid green";
    });
    apellido1.addEventListener('blur',function(){
        if(!validarApellido(apellido1)){
            apellido1.style.border="2px solid red";
        }else
            apellido1.style.border="2px solid green";
    });
    document.getElementById('apellido2').addEventListener('blur',function(){
        if(!validarApellido(apellido2)){
            apellido2.style.border="2px solid red";
        }else
            apellido2.style.border="2px solid green";
    });
    fecha.addEventListener('blur',function(){
        fecha=document.getElementById('fecha');
        if(!validarFecha(fecha)){
        fecha.style.border="2px solid red";
        }else
            fecha.style.border="2px solid green";
    });
    email.addEventListener('blur',function(){
        if(!validarEmail(email)){
            email.style.border="2px solid red";
        }else
            email.style.border="2px solid green";
    });
    dni.addEventListener('blur',function(){
        if(!validarDNI(dni)){
            dni.style.border="2px solid red";
        }else
            dni.style.border="2px solid green";
    });
   telefono.addEventListener('blur',function(){
        if(!validarTelefono(telefono)){
            telefono.style.border="2px solid red";
        }else
            telefono.style.border="2px solid green";
    });
    cuenta.addEventListener('blur',function(){
        if(!validarCuenta(cuenta)){
            cuenta.style.border="2px solid red";
        }else
            cuenta.style.border="2px solid green";
    });
    url.addEventListener('blur',function(){
        if(!validarUrl(url)){
            url.style.border="2px solid red";
        }else
            url.style.border="2px solid green";
    });
    document.getElementById('enviar').addEventListener("click", function () {
        var titulaciones = document.getElementsByName('titulacion');
        var idiomas=document.getElementsByName('idiomas[]');
        if (validarFormulario() && validarTitulacion(titulaciones) && validarIdiomas(idiomas)){
            var nuevaVentana=window.open();
            nuevaVentana.document.open();
            nuevaVentana.document.write("Formulario enviado");
        }
    })
})