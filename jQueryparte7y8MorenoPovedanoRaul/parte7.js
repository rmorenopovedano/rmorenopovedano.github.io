jQuery.fn.parpadea = function() {
    this.each(function(){
        elem = $(this);
        elem.fadeOut(250, function(){
            $(this).fadeIn(250);
        });
    });
    return this;
};
//creo el plugin cuentaCaracteres
jQuery.fn.cuentaCaracteres = function() {
//para cada uno de los elementos del objeto jQuery

    this.each(function(){
//creo una variable elem con el elemento actual, suponemos un textarea
        elem = $(this);
//creo un elemento DIV sobre la marcha
        var contador = $('<div>Contador caracteres: ' + elem.val().length + '</div>');
//inserto el DIV después del elemento textarea
        elem.after(contador);
//guardo una referencia al elemento DIV en los datos del objeto jQuery
        elem.data("campocontador", contador);
//creo un evento keyup para este elemento actual
        elem.keyup(function(){
//creo una variable elem con el elemento actual, suponemos un textarea
            var elem = $(this);
//recupero el objeto que tiene el elemento DIV contador asociado al textarea
            var campocontador = elem.data("campocontador");
//modifico el texto del contador, para actualizarlo con el número de caracteres escritos
            campocontador.text('Contador caracteres: ' + elem.val().length);
        });
    });
//siempre tengo que devolver this
    return this;
};

$(document).ready(function(){
//parpadean los elementos de class CSS "parpadear"
    $(".parpadear").parpadea();
//añado un evento clic para un botón, para que al pulsarlo parpadeen los elementos de clase; parpadear
    $("#botonparpadear").click(function(){
        $(".parpadear").parpadea();
    })
    $('textarea').cuentaCaracteres();
    $("#elemento1").creaTip("todo bien...");
    $("#elemento2").creaTip("Otra prueba...", {
        velocidad: 1000,
        claseTip: "otroestilotip",
        animacionMuestra: {
            opacity: "show",
            padding: '25px',
            'font-size': '2em'
        },
        animacionOculta: {
            height: "hide",
            padding: '5px',
            'font-size': '1em'
        }
    });
    $(".ch").checkboxPersonalizado();
    $("#otro").checkboxPersonalizado({
        activo: false,
        colorTextos: {
            activo: "#f80",
            pasivo: "#98a"
        },
        imagen: {
            activo: 'images/weather_cloudy.png',
            pasivo: 'images/weather_rain.png'
        },
        textos: {
            activo: 'Buen tiempo :)',
            pasivo: 'Buena cara ;)'
        },
        cssAdicional: {
            border: "1px solid #dd5",
            width: "100px"
        },
        nameCheck: "buen_tiempo"
    });

});
jQuery.fn.creaTip = function(textoTip, opciones) {
    var configuracion = {
        velocidad: 500,
        animacionMuestra: {width: "show"},
        animacionOculta: {opacity: "hide"},
        claseTip: "tip"
    }
    jQuery.extend(configuracion, opciones);
    this.each(function(){
        elem = $(this);
        var miTip = $('<div class="' + configuracion.claseTip + '">' + textoTip + '</div>');
        $(document.body).append(miTip);
        elem.data("capatip", miTip);
        elem.mouseenter(function(e){
            var miTip = $(this).data("capatip");
            miTip.css({
                left: e.pageX + 10,
                top: e.pageY + 5
            });
            miTip.animate(configuracion.animacionMuestra, configuracion.velocidad);
        });
        elem.mouseleave(function(e){
            var miTip = $(this).data("capatip");
            miTip.animate(configuracion.animacionOculta, configuracion.velocidad);
        });
    });
    return this;
};
jQuery.fn.checkboxPersonalizado = function(opciones) {
//opciones de configuración por defecto
    var conf = {
        activo: true,
        colorTextos: {
            activo: "#00f",
            pasivo: "#669"
        },
        textos: {
            activo: "",
            pasivo: ""
        },
        imagen: {
            activo: 'images/thumb_up.png',
            pasivo: 'images/thumb_down.png'
        },
        cssElemento: {
            padding: "2px 2px 2px 24px",
            display: "block",
            margin: "2px",
            border: "1px solid #eee",
            cursor: "pointer"
        },
        cssAdicional: {
        },
        nameCheck: ""
    };
//Las extiendo con las opciones recibidas al invocar el plugin
    jQuery.extend(conf, opciones);
    this.each(function(){
        var miCheck = $(this);
        var activo = conf.activo
        var elementoCheck = $('<input type="checkbox" style="display: none;" />');
        if(conf.nameCheck==""){
            elementoCheck.attr("name", miCheck.text());
        }else{
            elementoCheck.attr("name", conf.nameCheck);
        }
        miCheck.before(elementoCheck);
        miCheck.css(conf.cssElemento);
        miCheck.css(conf.cssAdicional);
        if (activo){
            activar();
        }else{
            desactivar();
        }
        miCheck.click(function(e){
            if(activo){
                desactivar();
            }else{
                activar();
            }
            activo = !activo;
        });
        function desactivar(){
            miCheck.css({
                background: "transparent url(" + conf.imagen.pasivo + ") no-repeat 3px",
                color: conf.colorTextos.pasivo
            });
            if (conf.textos.pasivo!=""){
                miCheck.text(conf.textos.pasivo)
            }
            elementoCheck.removeAttr("checked");
        };
        function activar(){
            miCheck.css({
                background: "transparent url(" + conf.imagen.activo + ") no-repeat 3px",
                color: conf.colorTextos.activo
            });
            if (conf.textos.activo!=""){
                miCheck.text(conf.textos.activo)
            }
            elementoCheck.attr("checked","1");
        };
    });
    return this;
};
