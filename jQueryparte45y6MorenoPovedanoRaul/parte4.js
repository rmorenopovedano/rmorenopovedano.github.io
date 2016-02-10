/**
 * Created by Raul on 09/02/2016.
 */
$(document).ready(function(){
    $("a").each(function(i){
        var titulo = $(this).attr("title");
        alert("Atributo title del enlace " + i + ": " + titulo);
    });
    $('input.fecha').attr("value", function(indiceArray){
//indiceArray tiene el índice de este elemento en el objeto jQuery
        var f = new Date();
        return f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
    });
    $("#boton").click(function(i){
        $("td").removeAttr("noWrap");
    });


});