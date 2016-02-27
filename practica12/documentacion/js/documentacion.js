/**
 * Created by Raul on 27/02/2016.
 */
$(function(){
    var js=$('#js');
    var coo=$('#coo');
    var ef=$('#ef');
    var nm=$('#nm');
    var li=$('#li');
    var va=$('#va');
    var fe=$('#fe');
    var pl=$('#pl');
    var jq=$('#jq');
    var javascript=$('#javascript');
    var cookiesActivas=$('#cookiesActivas');
    var efectos=$('#efectos_inicio');
    var nombre_efecto=$('#nombre_efecto');
    var lightbox=$('#lightbox');
    var validacion=$('#validacion');
    var fechas=$('#fechas');
    var plugin=$('#plugin');
    var jquery=$('#jquery');

    var mensaje=$('#mensaje');
    function mostrarArticle(article){
        ocultar();
        article.fadeIn();
    }
    function ocultar(){
        javascript.hide();
        cookiesActivas.hide();
        efectos.hide();
        nombre_efecto.hide();
        lightbox.hide();
        validacion.hide();
        fechas.hide();
        plugin.hide();
        jquery.hide();
    }
    js.click(function(){
        mostrarArticle(javascript);
    });
    coo.click(function(){
        mostrarArticle(cookiesActivas);
    });
    ef.click(function(){
        mostrarArticle(efectos);
    });
    nm.click(function(){
        mostrarArticle(nombre_efecto);
    });
    li.click(function(){
        mostrarArticle(lightbox);
    });
    va.click(function(){
        mostrarArticle(validacion);
    });
    fe.click(function(){
        mostrarArticle(fechas);
    });
    pl.click(function(){
        mostrarArticle(plugin);
    });
    jq.click(function(){
        mostrarArticle(jquery);
    });

});