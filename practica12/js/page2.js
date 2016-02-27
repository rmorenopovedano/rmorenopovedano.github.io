/**
 * Created by Raul on 24/02/2016.
 */
$(function(){
    //EFECTO SOBRE NOMBRE CASA: ASTURIAS
    var asturias=$("#asturias");
    var tituloAsturias=$('#tituloAsturias');
    asturias.mouseenter(function(){
        tituloAsturias.animate({color: '#FFBF00', opacity: '0.6', fontSize: "1.5em"}, "slow");
        tituloAsturias.animate({color: '#FFBF00', opacity: '1'}, "slow");
    });
    asturias.mouseleave(function(){
        tituloAsturias.animate({color: "white", fontSize: "1.2em"}, "slow");
        });
    //EFECTO SOBRE NOMBRE CASA: ANDALUCIA
    var andalucia=$('#andalucia');
    var tituloAndalucia=$('#tituloAndalucia');
    andalucia.mouseenter(function(){
        tituloAndalucia.animate({color: '#FFBF00', opacity: '0.6', fontSize: "1.5em"}, "slow");
        tituloAndalucia.animate({color: '#FFBF00', opacity: '1'}, "slow");
    });
    andalucia.mouseleave(function(){
        tituloAndalucia.animate({color: "white", fontSize: "1.2em"}, "slow");
    });
    //EFECTO SOBRE NOMBRE CASA: CANTABRIA
    var cantabria=$('#cantabria');
    var tituloCantabria=$('#tituloCantabria');
    cantabria.mouseenter(function(){
        tituloCantabria.animate({color: '#FFBF00', opacity: '0.6', fontSize: "1.5em"}, "slow");
        tituloCantabria.animate({color: '#FFBF00', opacity: '1'}, "slow");
    });
    cantabria.mouseleave(function(){
        tituloCantabria.animate({color: "white", fontSize: "1.2em"}, "slow");
    });

    //CONFIGURACIÓN LIGHTBOX
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'showImageNumberLabel': false,
        'positionFromTop': 120,
        'disableScrolling': true
    })
});