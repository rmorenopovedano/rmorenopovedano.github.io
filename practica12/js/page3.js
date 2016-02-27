/**
 * Created by Raul on 24/02/2016.
 */
$(function(){
    var nombre=document.getElementById('name');
    var apellido1=document.getElementById('ape1');
    var apellido2=document.getElementById('ape2');
    var correo=document.getElementById('email');
    var telefono=document.getElementById('telef');
    var fecha_entrada=document.getElementById('from');
    var fecha_salida=document.getElementById('to');
    var num_personas=document.getElementById('personas');
    var aceptar=document.getElementById('acept');
    var submit=document.getElementById('envi');
    var mensaje=$('#mensaje');
    comprobarCookies();
    nombre.addEventListener('blur', function(){
        validarNombre(nombre);
    });
    apellido1.addEventListener('blur', function(){
        validarApellido1(apellido1);
    });
    apellido2.addEventListener('blur', function(){
        validarApellido2(apellido2);
    });
    correo.addEventListener('blur', function(){
        validarCorreo(correo);
    });
    telefono.addEventListener('blur', function(){
        validarTelefono(telefono);
    });
    num_personas.addEventListener('blur', function(){
        validarNumPersonas(num_personas);
    });
    aceptar.addEventListener('blur', function(){
        validarAceptar(aceptar);
    });
    submit.addEventListener('click', function(evento){
        evento.preventDefault();
        if(validarFormulario()){
            crearCookies();
            mensaje.css("display","block");
            $('#formulario').submit();
        }
        else return false;
    });

    //COOKIES
    function crearCookies(){
        Cookies.set('nombre', nombre.value, { expires: 365 });
        Cookies.set('apellido1', apellido1.value, { expires: 365 });
        Cookies.set('apellido2', apellido2.value, { expires: 365 });
        Cookies.set('correo', correo.value, { expires: 365 });
        Cookies.set('telefono', telefono.value, { expires: 365 });
    }
    function comprobarCookies(){
        var cookieNombre=Cookies.get("nombre");
        var cookieApellido1=Cookies.get("apellido1");
        var cookieApellido2=Cookies.get("apellido2");
        var cookieCorreo=Cookies.get("correo");
        var cookieTelefono=Cookies.get("telefono");
            if (cookieNombre != "" && cookieApellido1 !="" && cookieApellido2!="" && cookieCorreo!=""
            && cookieTelefono!="" && cookieNombre !=null && cookieApellido1 !=null && cookieApellido2!=null
                && cookieCorreo!=null && cookieTelefono!=null) {
                nombre.value = cookieNombre;
                apellido1.value = cookieApellido1;
                apellido2.value = cookieApellido2;
                correo.value = cookieCorreo;
                telefono.value = cookieTelefono;
            }
    }

    //VALIDACIONES

    function validarNombre(valor){
        var $errorNombre=$('#errorNombre');
        var $name=$('#name');
        if(valor.value.trim()==""){
            $errorNombre.text("El campo no puede estar vacío");
        }else if(!/[\wáéíóúÁÉÍÓÚñÑ-]{3}/.test(valor.value.trim())){
            $errorNombre.text("Formato incorrecto");
        }else{
            $errorNombre.hide();
            $name.removeClass("error");
            return true;
        }
        $errorNombre.show();
        $name.addClass("error");
        $errorNombre.css({
            color: "orange",
            textShadow: "-1px 1px 1px black"
        });
        return false;
    }
    function validarApellido1(valor){
        var $errorApellido=$('#errorApellido1');
        var $apellido=$('#ape1');
        if(valor.value.trim()==""){
            $errorApellido.text("El campo no puede estar vacío");
        }else if(!/[\wáéíóúÁÉÍÓÚñÑ-]{3}/.test(valor.value.trim())){
            $errorApellido.text("Formato incorrecto");
        }else{
            $errorApellido.hide();
            $apellido.removeClass("error");
            return true;
        }
        $errorApellido.show();
        $apellido.addClass("error");
        $errorApellido.css({
            color: "orange",
            textShadow: "-1px 1px 1px black"
        });
        return false;
    }
    function validarApellido2(valor){
        var $errorApellido=$('#errorApellido2');
        var $apellido=$('#ape2');
        if(valor.value.trim()==""){
            $errorApellido.text("El campo no puede estar vacío");
        }else if(!/[\wáéíóúÁÉÍÓÚñÑ-]{3}/.test(valor.value.trim())){
            $errorApellido.text("Formato incorrecto");
        }else{
            $errorApellido.hide();
            $apellido.removeClass("error");
            return true;
        }
        $errorApellido.show();
        $apellido.addClass("error");
        $errorApellido.css({
            color: "orange",
            textShadow: "-1px 1px 1px black"
        });
        return false;
    }
    function validarCorreo(correo){
        var $errorCorreo=$('#errorCorreo');
        var $correo=$('#email');
        if(correo.value.trim()==""){
            $errorCorreo.text("El campo no puede estar vacío");
        }else if(!/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/.test(correo.value.trim())){
            $errorCorreo.text("Formato incorrecto");
        }else{
            $errorCorreo.hide();
            $correo.removeClass('error');
            return true;
        }
        $errorCorreo.show();
        $correo.addClass('error');
        $errorCorreo.css({
            color: "orange",
            textShadow: "-1px 1px 1px black"
        });
        return false;
    }
    function validarTelefono(telefono){
        var $errorTelefono=$('#errorTelefono');
        var $telefono=$('#telef');
        if(telefono.value.trim()==""){
            $errorTelefono.text("El campo no puede estar vacío");
        }else if(!/^\d{9}$/.test(telefono.value.trim())){
            $errorTelefono.text("Formato incorrecto. Son 9 dígitos");
        }else{
            $errorTelefono.hide();
            $telefono.removeClass('error');
            return true;
        }
        $errorTelefono.show();
        $telefono.addClass('error');
        $errorTelefono.css({
            color: "orange",
            textShadow: "-1px 1px 1px black"
        });
        return false;
    }
    function validarFechaEntrada(fecha_entrada){
        var $errorFechaEntrada=$('#errorFechaEntrada');
        if(fecha_entrada.value.trim()==""){
            $errorFechaEntrada.text("El campo no puede estar vacío");
        }else{
            $errorFechaEntrada.hide();
            return true;
        }
        $errorFechaEntrada.show();
        $errorFechaEntrada.css({
            color: "orange",
            textShadow: "-1px 1px 1px black"
        });
        return false;
    }
    function validarFechaSalida(fecha_salida){
        var $errorFechaSalida=$('#errorFechaSalida');
        if(fecha_salida.value.trim()==""){
            $errorFechaSalida.text("El campo no puede estar vacío");
        }else{
            $errorFechaSalida.hide();
            return true;
        }
        $errorFechaSalida.show();
        $errorFechaSalida.css({
            color: "orange",
            textShadow: "-1px 1px 1px black"
        });
        return false;
    }
    function validarNumPersonas(num_personas){
        $errorNumPersonas=$('#errorNumPersonas');
        $num_personas=$('#personas');
        if(num_personas.value.trim()==""){
            $errorNumPersonas.text("El campo no puede estar vacío");
        }else if(!/^[1-9][0-9]?$/.test(num_personas.value.trim())){
            $errorNumPersonas.text("Formato incorrecto");
        }else{
            $errorNumPersonas.hide();
            $num_personas.removeClass('error');
            return true;
        }
        $errorNumPersonas.show();
        $num_personas.addClass('error');
        $errorNumPersonas.css({
            color: "orange",
            textShadow: "-1px 1px 1px black"
        });
        return false;
    }
    function validarAceptar(aceptar){
        $errorAceptar=$('#errorAceptar');
        if(!aceptar.checked){
            $errorAceptar.text("Debes aceptar las condiciones");
            $errorAceptar.show();
            $errorAceptar.css({
                color: "orange",
                textShadow: "-1px 1px 1px black"
            });
            return false;
        }else {
            $errorAceptar.hide();
            return true;
        }
    }
    function validarFormulario(){
        var validacion = true;
        if(!validarNombre(nombre)){
            validacion = false;
        }
        if(!validarApellido1(apellido1)){
            validacion = false;
        }
        if(!validarApellido2(apellido2)){
            validacion = false;
        }
        if(!validarCorreo(correo)){
            validacion = false;
        }
        if(!validarTelefono(telefono)){
            validacion = false;
        }
        if(!validarFechaEntrada(fecha_entrada)){
            validacion = false;
        }
        if(!validarFechaSalida(fecha_salida)){
            validacion = false;
        }
        if(!validarNumPersonas(num_personas)){
            validacion = false;
        }
        if(!validarAceptar(aceptar)){
            validacion = false;
        }
        return validacion;
    }
    //DATEPICKER
    $( "#from" ).datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 0,
        firstDay: 1,
        prevText: 'Anterior',
        nextText: 'Siguiente',
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S", "D"],
        monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
        numberOfMonths: 1,
        onClose: function( selectedDate ) {
            if(selectedDate)
                $( "#to" ).datepicker( "option", "minDate", selectedDate );
            validarFechaEntrada(fecha_entrada);
        }
    });
    $( "#to" ).datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 0,
        firstDay: 1,
        prevText: 'Anterior',
        nextText: 'Siguiente',
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S", "D"],
        monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
        numberOfMonths: 2,
        onClose: function( selectedDate ) {
            if(selectedDate)
                $( "#from" ).datepicker( "option", "maxDate", selectedDate );
            validarFechaSalida(fecha_salida);
        }
    });
});