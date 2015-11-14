/*
Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
Métodos a utilizar:
miVentana = window.open('','','width=200,height=200');
miVentana.document.open();
miVentana.document.write()
Añade el esqueleto básico: html, head, title, body, ul...
miVentana.document.close();
*/
window.addEventListener("load", function(){
  document.getElementById("abrir").addEventListener("click", function(){
      abrirVentana();
  });
});
function abrirVentana(){
  for (var i = 1; i < 6; i++) {
    var nuevaVentana=window.open("","", "top="+(i*20)+", left="+(i*20)+", width=200, height=200");
    nuevaVentana.document.write("<html>");
    nuevaVentana.document.write("<head>");
    nuevaVentana.document.write("<title>Ventana "+i+"</title>");
    nuevaVentana.document.write("<script type='text/javascript' src='multiplesVentanasB.js'></script>");
    nuevaVentana.document.write("</head>");
    nuevaVentana.document.write("<body>");
    nuevaVentana.document.write("<label for='ventana'>Ventana "+i+" </label><input type='button' id='cerrar' value='Cerrar'>");
    nuevaVentana.document.write("</body>");
    nuevaVentana.document.write("</html>");
    nuevaVentana.document.close();
  }
}
