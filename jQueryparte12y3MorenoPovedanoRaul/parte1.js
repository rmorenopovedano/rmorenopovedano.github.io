/**
 * Created by Raul on 02/02/2016.
 */
$(document).ready(function() {
    $('#btna').click(function () {
        $("#capa").html("Has hecho clic en el botón<b>A</b>");
    })
    $('#btnb').click(function () {
        $("#capa").html("Has echo clic en el botón<b>B</b>");
    })
    $("#capa2").mouseenter(function (evento) {
        $("#mensaje").css("display", "block");
    });
    $("#capa2").mouseleave(function (evento) {
        $("#mensaje").css("display", "none");
    });
    $("#a1").click(function () {
        confirm("Vas a ser enviado a otra dirección web");
    });
    $("#a2").click(function (evento) {
        confirm("Vas a ser enviado a otra dirección web");
        evento.preventDefault();
    })
    $("#a3").mouseover(function (evento) {
        $("#capa3").addClass("clasecss");
    })
    $("#a3").mouseout(function (evento) {
        $("#capa3").removeClass("clasecss");
    })
    $("#mayoria_edad").click(function (evento) {
        if ($("#mayoria_edad").prop("checked")) {
            $("#formulariomayores").css("display", "block");
        } else {
            $("#formulariomayores").css("display", "none");
        }
    });
    $("#ocultar").click(function (event) {
        event.preventDefault();
        $("#capaefectos").hide("slow");

    });
    $("#mostrar").click(function(event){
        event.preventDefault();
        $("#capaefectos").show(3000);
    });
    $("#realizar").click(function(evento){
        evento.preventDefault();
        $("#micapa").fadeOut(1000, function(){
            $("#micapa").css({'top': 300, 'left':200});
            $("#micapa").fadeIn(1000);
        });
    });
    $("#enlaceajax").click(function(evento){
        evento.preventDefault();
        $("#destino").load("contenido-ajax.html");
    });
    $("#enlaceajax2").click(function(evento){
        evento.preventDefault();
        $("#destino2").load("recibe-parametros.php", {nombre: "Pepe", edad: 45}, function(){
            alert("recibidos los datos por ajax");
        });
    });
    $("#enlaceajax3").click(function(evento){
        evento.preventDefault();
        $("#cargando").css("display", "inline");
        $("#destino3").load("pagina-lenta.php", function(){
            $("#cargando").css("display", "none");
        });
    });

});