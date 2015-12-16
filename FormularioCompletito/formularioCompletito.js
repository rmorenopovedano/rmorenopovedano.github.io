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
var nombre, apellido1,apellido2,fecha,ciudad,email, dni, telefono, cuenta,url;
window.addEventListener("load", function() {
    document.getElementById('nombre').focus();
    document.getElementById('nombre').addEventListener('blur',function(){
        nombre=document.getElementById('nombre');
        if(!validarNombre(nombre)){
            document.getElementById('nombre').style.border="2px solid red";
        }else
            document.getElementById('nombre').style.border="2px solid green";
    });
    document.getElementById('apellido1').addEventListener('blur',function(){
        apellido1=document.getElementById('apellido1');
        if(!validarApellido(apellido1)){
            document.getElementById('apellido1').style.border="2px solid red";
        }else
            document.getElementById('apellido1').style.border="2px solid green";
    });
    document.getElementById('apellido2').addEventListener('blur',function(){
        apellido2=document.getElementById('apellido2');
        if(!validarApellido(apellido2)){
            document.getElementById('apellido2').style.border="2px solid red";
        }else
            document.getElementById('apellido2').style.border="2px solid green";
    });
    document.getElementById('fecha').addEventListener('blur',function(){
        fecha=document.getElementById('fecha');
        if(!validarFecha(fecha)){
            document.getElementById('fecha').style.border="2px solid red";
        }else
            document.getElementById('fecha').style.border="2px solid green";
    });
    document.getElementById('email').addEventListener('blur',function(){
       email=document.getElementById('email');
        if(!validarEmail(email)){
            document.getElementById('email').style.border="2px solid red";
        }else
            document.getElementById('email').style.border="2px solid green";
    });
    document.getElementById('dni').addEventListener('blur',function(){
        dni=document.getElementById('dni');
        if(!validarDNI(dni)){
            document.getElementById('dni').style.border="2px solid red";
        }else
            document.getElementById('dni').style.border="2px solid green";
    });
    document.getElementById('telefono').addEventListener('blur',function(){
        telefono=document.getElementById('telefono');
        if(!validarTelefono(telefono)){
            document.getElementById('telefono').style.border="2px solid red";
        }else
            document.getElementById('telefono').style.border="2px solid green";
    });
    document.getElementById('cuenta').addEventListener('blur',function(){
        cuenta=document.getElementById('cuenta');
        if(!validarCuenta(cuenta)){
            document.getElementById('cuenta').style.border="2px solid red";
        }else
            document.getElementById('cuenta').style.border="2px solid green";
    });
    document.getElementById('url').addEventListener('blur',function(){
        url=document.getElementById('url');
        if(!validarUrl(url)){
            document.getElementById('url').style.border="2px solid red";
        }else
            document.getElementById('url').style.border="2px solid green";
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

