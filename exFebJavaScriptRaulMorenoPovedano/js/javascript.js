/**
 * Created by Raul on 09/02/2016.
 */
(function(){
    window.addEventListener("load", function(){
        var nombre=document.getElementById('nombre');
        var apellidos=document.getElementById('apellidos');
        var dni=document.getElementById('dni');
        var sexo=document.getElementById('sexo');
        var errorNombre=document.getElementById('errorNombre');
        var errorApellidos=document.getElementById('errorApellidos');
        var errorDni=document.getElementById('errorDni');
        var errorAceptar=document.getElementById('errorAceptar');
        var info=document.getElementById('info');
        var aceptar=document.getElementById('aceptar');
        var lista=document.getElementById('lista');
        nombre.addEventListener('blur',function(){
            validarNombre(nombre, errorNombre);
        });
        apellidos.addEventListener('blur', function(){
            validarApellidos(apellidos, errorApellidos);
        });
        dni.addEventListener('blur', function(){
            validarDni(dni, errorDni);
        });
        aceptar.addEventListener('blur', function(){
            validarAceptar(aceptar, errorAceptar);
        });
        document.getElementById('enviar').addEventListener('click',function(){
            if(validarFormulario()){
                var usuario=new Usuario(nombre.value, apellidos.value, dni.value, sexo.value);
                usuario.mostrar(info);
                usuario.crearListItem(lista);
                if(aceptar.checked){
                    document.cookie="nombre="+nombre.value+";";
                    document.cookie="apellidos="+apellidos.value+";";
                    document.cookie="dni="+dni.value+";";
                    document.cookie="sexo="+sexo.value+";";
                }

            }
        });
        document.getElementById('limpiar').addEventListener('click', function(){
            nombre.value="";
            apellidos.value="";
            dni.value="";
            aceptar.checked=false;
            document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "apellidos" + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            document.cookie = "dni" + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            document.cookie = "sexo" + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        });
    });
})();

