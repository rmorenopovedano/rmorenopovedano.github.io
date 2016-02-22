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
                document.cookie="nombre="+nombre.value+";";
                document.cookie="apellidos="+apellidos.value+";";
                document.cookie="dni="+dni.value+";";
                document.cookie="sexo="+sexo.value+";";
            }
        });
        document.getElementById('limpiar').addEventListener('click', function(){
            limpiarErrores();
            limpiarCampos();
            limpiarInfo();
            limpiarCookies();

        });
    });

    //limpiar
    function limpiarErrores(){
        errorNombre.innerHTML="";
        errorApellidos.innerHTML="";
        errorDni.innerHTML="";
        errorAceptar.innerHTML="";
    }
    function limpiarCampos(){
        nombre.value="";
        apellidos.value="";
        dni.value="";
        aceptar.checked=false;
    }
    function limpiarCookies(){
        document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "apellidos" + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "dni" + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "sexo" + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    function limpiarInfo(){
        info.innerHTML="";
    }
    //validaciones
    function validarNombre(nombre){
        if(nombre.value.trim()==""){
            errorNombre.innerHTML = "El campo no puede estar vacío";
        }else if(!/[\wáéíóúÁÉÍÓÚñÑ-]{4}/.test(nombre.value)){
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
})();

