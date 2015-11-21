/*
Implementa mediante javaScript el ejercicio primos mediante closure.

Han de estar como elementos privados:

vector de números primos
acumulador de números primos
esPrimos () que está en el foro
Recuerda que:

No podéis crear ninguna variable global (function(){...})();
El resultado se mostrará en una ventana nueva.
*/
window.addEventListener("load", function(){
    document.getElementById("enviar").addEventListener("click", function(){
        crearVentana();
    });
});
function crearVentana(){
  var nuevaVentana=window.open("", "Nueva ventana","resizable=yes, top=100, left=200, width=700, height=500");
  nuevaVentana.document.write(
              "<html>"+
                  "<head>"+
                      "<title>Nueva ventana</title>"+
                      "<script type='text/javascript' src='primos2.js'></script>"+
                  "</head>"+
                  "<body>"+
                      "<p><b>Numeros primos:</b> </h2><p id='primos'></p>"+
                      "<p><b>Suma 100 primeros números primos:</b> </p><p id='suma'></p>"+
                  "</body>"+
              "</html>");
  nuevaVentana.document.close();
}
