/**
 * Created by Raul on 09/02/2016.
 */
$(document).ready(function(){
    var numClics = 0;
    var numDobleClics = 0;
    $("#micapa").click(function(e){
        numClics++;
        $("#mensaje").html("Clic " + numClics);
    });
    $("#micapa").dblclick(function(e){
        numDobleClics++;
        $("#mensaje").html("Doble Clic " + numDobleClics);
    });
    $(document).click(function(e){
        alert("X: " + e.pageX + " - Y: " + e.pageY)
    });
    $("#elemento1").mouseenter(function(evento){
        $("#tip1").css("left", evento.pageX + 5);
        $("#tip1").css("top", evento.pageY + 5);
        $("#tip1").css("display", "block");
    });
    $("#elemento1").mouseleave(function(e){
        $("#tip1").css("display", "none");
    });
    $("#elemento2").mouseenter(function(e){
        $("#tip2").css("left", e.pageX + 5);
        $("#tip2").css("top", e.pageY + 5);
        $("#tip2").css("display", "block");
    });
    $("#elemento2").mouseleave(function(e){
        $("#tip2").css("display", "none");
    });
    function operaEvento(evento){
        $("#loescrito").html($("#loescrito").html() + evento.type + ": " + evento.which + ", ")
    }
    $(document).ready(function(){
        $(document).keypress(operaEvento);
        $(document).keydown(operaEvento);
        $(document).keyup(operaEvento);
    })
    $("#mitexto").keypress(function(e){
        e.preventDefault();
        $("#loescrito2").html(e.which + ": " + String.fromCharCode(e.which));
    });
    $("p").bind("click mouseenter mouseleave", function(e){
        if ($(this).css("color")!="rgb(250, 100, 0)")
            $(this).css("color", "rgb(250, 100, 0)");
        else
            $(this).css("color", "rgb(150, 0, 255)");
    })
    function clicAlerta(){
        alert("Has hecho clic");
    }
    $(".miclase").bind("click", clicAlerta);
    $("#quitarevento").bind("click", function(){
        $(".miclase").unbind("click", clicAlerta);
    })
    $(document.body).on("click",".verde" ,function(e){
        var elem = $(e.target());
        if (elem.html()!="Hiciste clic!!"){
            elem.html("Hiciste clic!!");
        }else{
            elem.html("Hiciste de nuevo clic!!");
        }
    })
    $("#insertarelem").click(function(e){
        var nuevoElemento = $('<div class="verde">Este elemento se ha creado e insertado dinamicamente (haz clic)</div>');
        nuevoElemento.appendTo($(document.body));
    });
    $("#ponerclaseverde").click(function(e){
        $("#noverde").addClass("verde");
    });


})