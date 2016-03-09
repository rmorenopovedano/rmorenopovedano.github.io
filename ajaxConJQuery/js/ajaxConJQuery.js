/**
 * Created by Raul on 08/03/2016.
 * Cargando ficheros del servidor

 Utilizando Ajax mediante jQuery, realiza una comunicación con el servidor que reciba y muestre un fichero html. El funcionamiento será el siguiente:
 Página html con una caja de texto donde se indica una url que vas a descargar del servidor. Inicialmente aparecerá la propia página
 Al pulsar el botón "mostrar" mostrará el fichero en un scroller
 En un div debe mostrarse el éxito o el error de la petición.
 Utiliza estilos y diseña la página de forma equilibrada.
 En la misma ruta, deja un fichero index2.html para probar la carga de otros ficheros
 Envía el ejercicio operativo online y copia de los ficheros
 */
(function(){
    var $recurso, $enviar, $contenidos, $codigo;
    $(function(){
        $recurso=$('#recurso');
        $enviar=$('#enviar');
        $contenidos=$('#contenidos');
        $codigo=$('#codigo');
        $recurso.val(location.href);
        $enviar.on('click', function(){
            mostrarUrl();
        });
    });
    function mostrarUrl(){
        $.ajax({
            url: $recurso.val(),

        }).done(function(contenido, mensaje) {
                $contenidos.text(contenido);
                $codigo.text(mensaje);
            })
            .fail(function(contenido, mensaje) {
                $codigo.text(mensaje);
                limpiar();
            });
    }
    function limpiar(){
        $contenidos.text("");
    }
})();