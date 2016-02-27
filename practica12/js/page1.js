/**
 * Created by Raul on 22/02/2016.
 */
$(function(){

    //EFECTOS JQUERY FOTOS
    $('#f1').fadeIn(1000);
    $('#f2').fadeIn(3000);
    $('#f3').fadeIn(5000);

    //MENSAJE DE COOKIES
    cookiesActivas();
    function cookiesActivas(){
        if(!navigator.cookieEnabled || !window.navigator.cookieEnabled ){
            $('#dialog').show();
        }
    }
    $('a').click(function(){
        $('#dialog').hide();
    });

    //EFECTO VISUAL INICIO
    var ancho=$(window).width();
    var mitadAncho=ancho/2;
    var alto=$(window).height();
    var mitadAlto=alto/2;
    $('.fondo_index').mousemove(function(event){
        var coordenadaX=event.pageX;
        var coordenadaY=event.pageY;
        var x=(coordenadaX-mitadAncho)/70;
        var y=(coordenadaY-mitadAlto)/70;
        x = 50 + x;
        y = 50 + y;
        $(this).css("background-position", x+"% "+y+"%");
    });


});
