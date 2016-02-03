$(document).ready(function(){
    var elem1 = $("#elem1");
//podríamos haber escrito: var elem1 = jQuery("#elem1");
    elem1.css("background-color", "#ff9999");
    var divs = $("div");
//podríamos haber escrito: var elem1 = jQuery("#elem1");
    divs.css("font-size", "32pt");
    var nuevosElementos = $("<div>Estos elementos ..</b>.<h1>Título...</h1></div>");
    nuevosElementos.appendTo("body");
    $(function (){
        var documento = $("p");
        documento.css("background-color", "#ff8833");
    });
    $(function (){
        var documento = $("b");
        documento.css("color", "#fff");
    });
    $(function(){
        $("p").each(function(i){
            if(i%2==0){
                $(this).css("background-color", "#eee");
            }else{
                $(this).css("background-color", "#ccc");
            }
        });
    })
    $("div").each(function(i){
        elemento = $(this);
        if(elemento.html() == "white")
            return true;
        if(elemento.html() == "nada")
            return false;
        elemento.css("color", elemento.html());
    });
    var ElementosMitexto = $(".mitexto");
    //muestro el número de los párrafos encontrados
    alert ("Hay " + ElementosMitexto.length + " elementos de la clase mitexto");
    $("#capa").data("midato","mivalor");
    alert($("#capa").data("midato"));
    //para eliminar el valor usaríamos
    $("#capa").removeData("midato");
    alert($("#capa").data("midato"));
    $("#guardar").click(function(evento){
        var valor = document.formul.valor.value;
//Esta misma línea de código se puede codificar así también con jQuery
//var valor = $("#valor").attr("value");
        $("#division").data("midato",valor);
        $("#division").html('He guardado en este elemento (id="division") un dato llamado "midato" con el valor "' + valor + '"');
        $("#leer").click(function(evento){
            valor = $("#division").data("midato");
            $("#division").html('En este elemento (id="division") leo un dato llamado "midato" con el valor "' + valor + '"');
        });
        $("#eliminar").click(function(evento){
            $("#division").removeData("midato");
            $("#division").html('Acabo de eliminar del elemento (id="division") el dato llamado "midato"');
        });
    });
    $("#guardar2").click(function(evento){
        $("a").data("midato","mivalor");
        $("#mensaje").html('He guardado en todos los enlaces un dato llamado "midato" con el valor "mivalor"');
    });
    $("#guardarenlace1").click(function(evento){
        $("#enlace1").data("midato","otro valor");
        $("#mensaje").html('He guardado en el enlace1 un dato llamado "midato" con el valor "otro valor"');
    });
    $("a").click(function(evento){
        evento.preventDefault();
        valorAlmacenado = $(this).data("midato");
        $("#mensaje").html("En el enlace <b>" + $(this).attr("id") + "</b> tiene el dato 'midato' como "
            + valorAlmacenado);
    });

});
