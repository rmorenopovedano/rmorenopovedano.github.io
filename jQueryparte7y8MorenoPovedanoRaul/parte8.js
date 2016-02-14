$(document).ready(function() {
    $("#animar").click(function (e) {
        e.preventDefault()
        $("h1").animate({
            'border-bottom-width': "20",
            'font-size': '25pt'
        });
    });
    $("#restaurar").click(function (e) {
        e.preventDefault()
        $("h1").css({
            'border-bottom-width': "1",
            'font-size': '15pt'
        });
    });
    $("h1").animate({
        color: "#f86"
    }, 3000);
    $(document).ready(function () {
        $("#ocultartoda").click(function (e) {
            $("#milista").fadeOut();
        });
        $("#mostrartoda").click(function (e) {
            $("#milista").fadeIn();
        });
        $("#ocultarmostrar").click(function (e) {
            $("#milista").fadeOut(function () {
                $(this).fadeIn();
            });
        });
        $("#selopacidad").change(function (e) {
            var opacidad_deseada = e.target.options[e.target.selectedIndex].value
            $("h1").fadeTo(1000, opacidad_deseada);
        });
        $("#pororden").click(function (e) {
            var opacidad_deseada = $("#selopacidad").attr("value");
            $("#e1").fadeTo(500, opacidad_deseada, function () {
                $("#e2").fadeTo(500, opacidad_deseada, function () {
                    $("#e3").fadeTo(500, opacidad_deseada);
                });
            });
        })
    })
    function colaEfectos() {
        capa = $("#micapa");
        capa.animate({
            "font-size": "1.5em"
        }, 2000);
        capa.hide(1000);
        capa.show(1000);
        capa.animate({
            "left": "350px",
            "top": "50px"
        }, 1500);
        capa.animate({
            "font-size": "0.75em"
        }, 2000);
        capa.animate({
            "left": "100px",
            "top": "20px"
        }, 1500, colaEfectos);
    }

    $(document).ready(function () {
        colaEfectos();

    });
    function muestraRestantesCola() {
        var numFuncionesEnCola = $("#micapa").queue().length;
        $("#mensaje").text("En el momento de hacer el último clic en los botones hay " +
            numFuncionesEnCola + " funciones de efectos en cola");
    }

    $(document).ready(function () {
        $("#botonfade").click(function () {
            capa = $("#micapa");
            capa.fadeOut(500);
            capa.fadeIn(500);
            muestraRestantesCola();
        });
        $("#botonslide").click(function () {
            capa = $("#micapa");
            capa.slideUp(500);
            capa.slideDown(500);
            muestraRestantesCola();
        });
        $("#botontamanocola").click(function () {
            muestraRestantesCola();
        })

    })
    function muestraRestantesCola(){
        var funcionesEnCola = $("#micapa").queue("micola").length;
        var funcionesEnColaPredeterminada = $("#micapa").queue().length;
//console.log("Cola 'micola':", $("#micapa").queue("micola"));
        var textoMostrar = "Hay " + funcionesEnCola + " funciones de efectos en la cola 'micola'";
        textoMostrar += "<br>Hay " + funcionesEnColaPredeterminada + " funciones de efectos en la cola
        por defecto";
        $("#mensaje").html(textoMostrar);
    }
    function cambiarColores(){
        capa = $("#micapa");
        capa.delay(1000, "micola");
        capa.queue("micola", function(sig){
            $(this).css({
                "background-color": "#339"
            });
            sig()
        });
        capa.delay(1000, "micola");
        capa.queue("micola", function(sig){
            $(this).css({
                "background-color": "#933"
            });
            sig();
        });
        capa.delay(1000, "micola");
        capa.queue("micola", function(sig){
            $(this).css({
                "background-color": "#393"
            });
            cambiarColores();
        });
        capa.dequeue("micola");
    }
    function ocultaMuestra(){
        capa = $("#micapa");
        capa.fadeTo(500, 0.3);
        capa.fadeTo(1200, 1);
        capa.animate({
            "left": "350px"
        },1200);
        capa.animate({
            "left": "100px"
        },1000, ocultaMuestra);
    }
    $(document).ready(function(){
        cambiarColores();
        ocultaMuestra();
        $("#botontamanocola").click(function(){
            muestraRestantesCola();
        });
    });
}